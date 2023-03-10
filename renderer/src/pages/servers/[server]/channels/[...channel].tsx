import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { menu, channels, profile } from "@data/mockdata";
import {
	ChannelSubmenuType,
	ChannelsType,
	ChannelType,
	ChannelSubmenuMessages,
	MenuItem,
	Channel,
} from "@types";
import useStore from "@hooks/use-store";
import DropDown from "@components/ui/dropdown/dropdown";
import Messages from "screens/features/messages/messages";
import Input from "@components/form/input";
import { BsFillSendFill } from "react-icons/bs";
import Welcome from "screens/features/welcome/welcome";

function Home({
	servers,
	channelInfo,
	channel,
	serverChannels,
}: {
	servers: MenuItem;
	channelInfo: ChannelSubmenuType;
	channel: ChannelsType;
	serverChannels: ChannelsType;
}) {
	const { getChannelMessages, addNewMessageToStore } = useStore();
	const [channelInfoState, setChannelInfoState] =
		React.useState<ChannelSubmenuType>();
	const [channels, setChannels] = React.useState<ChannelsType>([]);
	const [messages, setMessages] = React.useState<ChannelSubmenuMessages>([]);
	const [serverChannelsState, setServerChannelsState] =
		React.useState<ChannelType>();
	const channelMessages = getChannelMessages({
		server: servers?.path as Channel,
		channel: serverChannelsState?.path,
		submenu: channelInfoState?.path,
	});

	useEffect(() => {
		if (channel) setChannels(JSON.parse((channel as any) || "[]"));
	}, [channel]);

	useEffect(() => {
		if (channelInfo)
			setChannelInfoState(JSON.parse((channelInfo as any) || "{}"));
	}, [channelInfo]);

	useEffect(() => {
		if (serverChannels)
			setServerChannelsState(JSON.parse((serverChannels as any) || "{}"));
	}, [serverChannels]);

	useEffect(() => {
		if (channelMessages) {
			setMessages(() => [...channelMessages]);
		}
	}, [channelMessages]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (e.target[0].value !== "") {
			addNewMessageToStore({
				server: servers?.path as Channel,
				channel: serverChannelsState?.path,
				submenu: channelInfoState?.path,
				message: {
					user: {
						name: "user",
						image: "/images/user.png",
						comment: e.target[0]?.value,
						date: `${new Date()}`,
					},
				},
			});
		}
		e.target[0].value = "";
	};

	return (
		<div className="w-full h-screen flex flex-row justify-evenly items-center overflow-hidden">
			<Head>
				<title>{`${servers?.name} - ${channelInfoState?.name}`}</title>
			</Head>
			<div className="flex flex-col w-64 h-full justify-start items-center bg-black-800 relative">
				{channels &&
					channels?.map((item: ChannelType, index: number) => {
						return (
							<DropDown
								items={item?.submenus}
								index={index}
								key={index}
								name={item?.name}
							/>
						);
					})}

				<div className="box-border absolute bottom-0 w-full h-max bg-black flex flex-row  py-1.5 px-3">
					<div className="flex flex-row justify-start items-center rounded-lg gap-x-3 p-0.5 px-1 group hover:bg-black-700 transition-colors duration-150 ease-in hover:cursor-pointer">
						<Image
							src={profile?.image}
							alt="profile"
							width={40}
							height={40}
							className="object-cover rounded-full group-hover:scale-90"
						/>

						<div className="flex flex-col justify-center items-start ">
							<p className="text-gray-300 text-lg font-semibold">
								{profile?.name}
							</p>
							<p className="text-gray-400 text-xs">{profile?.title}</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="flex h-full flex-col justify-end items-center"
				style={{
					width: "calc(100% - 220px)",
				}}
			>
				<div
					className="flex flex-col h-max w-full relative  items-center box-border overflow-y-scroll scrollbar-thin scrollbar-thumb-black-900 scrollbar-track-black-600 scroll-smooth"
					ref={(el) => {
						if (el) el.scrollTop = el.scrollHeight;
					}}
				>
					<Welcome
						serverName={servers?.name}
						channelName={channelInfoState?.name}
					/>
					<Messages messages={messages} />
				</div>
				<form
					onSubmit={handleSubmit}
					className="flex flex-row w-full h-max p-3 relative justify-center items-center"
				>
					<Input
						type="text"
						onChange={() => {}}
						placeholder="type text"
						name="input"
					/>
					<button type="submit" className="absolute right-5">
						<BsFillSendFill className="w-6 h-5 text-gray-300" />
					</button>
				</form>
			</div>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { server, channel: channelQuery } = context.query;

	const channel = channels?.[server as string];
	const channelsType = channels?.[server as string]?.find(
		(item) => item.path === channelQuery[0]
	);
	const channelType = channelsType?.submenus?.find(
		(item) => item.path === channelQuery[1]
	);
	const servers = menu.find((item) => item.path === server);

	if (!servers) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			servers,
			channel: channel ? JSON.stringify(channel) : [],
			serverChannels: channelsType ? JSON.stringify(channelsType) : {},
			channelInfo: channelType ? JSON.stringify(channelType) : {},
		},
	};
};

export default Home;
