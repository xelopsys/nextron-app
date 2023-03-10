import React, { useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { typeOfChannels } from "@data/mockdata";
import { ChannelSubmenuType } from "@types";
import { useRouter } from "next/router";
import { IconType } from "react-icons";
import { classNames } from "@helpers";

function Icon({ IconProp }: { IconProp: IconType }) {
	return <IconProp className="w-4 h-4" />;
}

export default function DropDown({
	items,
	index,
	name,
}: {
	name: string;
	items: ChannelSubmenuType[];
	index?: number;
}) {
	const router = useRouter();
	console.log(router?.asPath, "router");
	const [active, setActive] = useState<boolean>(true);
	return (
		<div className="w-full my-4" key={index}>
			<button
				className="w-full flex flex-row justify-start items-center text-gray-400 font-semibold uppercase text-xs"
				onClick={() => {
					setActive(!active);
				}}
			>
				<BiChevronDown
					className={`w-4 h-4 ${active ? "rotate-0" : "-rotate-90"}`}
				/>
				<span>{name}</span>
			</button>
			<div>
				{active &&
					items?.map((sub: ChannelSubmenuType) => {
						return (
							<Link href={`${sub?.link}`} key={sub?.name}>
								<div
									key={sub.name}
									className={classNames(
										"mx-3 flex flex-row justify-start items-center gap-x-1 font-medium text-sm my-2 ml-5 text-gray-400 cursor-pointer px-2 py-1.5 hover:text-white hover:bg-black-600 rounded-md transition-all duration-200 ease-in-out",
										router?.asPath === sub?.link && "text-white bg-black-600"
									)}
								>
									<Icon IconProp={typeOfChannels[sub?.type]} />
									<a className=" p-0 m-0">{sub?.name}</a>
								</div>
							</Link>
						);
					})}
			</div>
		</div>
	);
}
