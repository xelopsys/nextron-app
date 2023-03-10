import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { channels, profile } from "@data/mockdata";
import { store } from "@context/store/store";
import { ChannelsType, ChannelType, MenuItem } from "@types";
import DropDown from "@components/ui/dropdown/dropdown";
import Welcome from "screens/features/welcome/welcome";

function Home({
	servers,
	channel,
}: {
	servers: MenuItem;
	channel: ChannelsType;
}) {
	const [channels, setChannels] = useState<ChannelsType>([]);

	useEffect(() => {
		if (channel) setChannels(JSON.parse(channel as any));
	}, [channel]);

	console.log(channels);

	return (
		<div className="w-full h-full flex flex-row">
			<Head>
				<title>{servers?.name}</title>
			</Head>
			<div className="flex flex-col w-64 h-full bg-black-800 justify-start items-center relative z-0">
				{channels?.map((item: ChannelType, index: number) => {
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
					<div className="flex flex-row justify-start items-center rounded-lg gap-x-3 p-0.5 px-2 group hover:bg-black-700 transition-colors duration-150 ease-in hover:cursor-pointer">
						<div className="w-10 h-10 object-contain group-hover:ring-2 group-hover:ring-gray-600 rounded-full">
							<Image
								src={profile?.image}
								alt="profile"
								width={40}
								height={40}
								className="object-cover rounded-full group-hover:scale-90"
							/>
						</div>

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
				className="flex flex-col h-full w-full relative items-center justify-center box-border overflow-y-scroll scrollbar-thin scrollbar-thumb-black-900 scrollbar-track-black-600 scroll-smooth"
				style={{
					width: "calc(100% - 220px)",
				}}
			>
				<Welcome serverName={servers?.name} channelName="" />
			</div>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { server } = context.query;
	const channel = channels?.[server as string];
	const servers = store?.getState()["[menu]"]?.find((item) => {
		return item?.path === server;
	});
	if (!servers) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			servers,
			channel: channel ? JSON.stringify(channel) : [],
		},
	};
};

export default Home;
