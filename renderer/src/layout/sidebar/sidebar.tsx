import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxTriangleLeft } from "react-icons/rx";
import { IoAddSharp } from "react-icons/io5";
import useStore from "@hooks/use-store";
import CreateServer from "@screens/forms/create-server";

export type MenuItem = {
	name: string;
	link: string;
	image: string;
	path?: string;
};

export default function Sidebar() {
	const { asPath } = useRouter();
	const { servers: menuItems } = useStore();
	const [isClosed, setIsClosed] = useState(true);
	const [menu, setMenu] = React.useState<MenuItem[]>([]);

	useEffect(() => {
		if (menuItems) setMenu([...menuItems]);
	}, [menuItems]);

	return (
		<>
			<div className="w-20 h-screen bg-black-900 flex flex-col justify-start items-center sticky left-0  z-10">
				<div>
					<div className="w-20 h-16 relative flex justify-center items-center group hover:cursor-pointer transition-all ease-linear duration-100 ">
						<Link href="/home">
							<div
								className={`w-12 h-12 object-cover flex flex-row justify-center items-center p-2 rounded-full ${
									asPath === "/home" ? "bg-purple" : "bg-black-700"
								} hover:bg-purple hover:rounded-2xl transition-all duration-100 ease-linear`}
							>
								<Image
									src="/logo/discord-white.png"
									alt="Discord"
									width={38}
									height={28}
									className=" border object-cover"
								/>
							</div>
						</Link>
						<span
							className={`absolute border-2 w-2 bg-white rounded-full -left-1 group-hover:h-8 group-hover:bottom-4 ${
								asPath === "/home" ? "h-10 bottom-3" : "h-2 bottom-[43%]"
							}`}
						/>
						<span className="absolute bg-dark left-24 space-x-reverse origin-left scale-0 group-hover:scale-100 transition-all duration-200 px-2 py-1 rounded-lg flex flex-row justify-center items-center">
							<RxTriangleLeft className="w-6 h-6 absolute -left-3 text-dark" />{" "}
							Home
						</span>

						{/* border */}
						<span className="absolute border bottom-0 w-8 border-black-700" />
						{/* border */}
					</div>
				</div>

				{/* menu items  */}
				{menu?.map((item) => {
					const active = asPath.includes(item.link);
					return (
						<Link href={item?.link} key={item.name}>
							<div className="w-20 h-16 relative flex justify-center items-center group hover:cursor-pointer transition-all origin-center duration-100">
								<Image
									src={item.image}
									alt={item.name}
									width={50}
									loading="eager"
									height={50}
									className="object-cover flex flex-row rounded-full justify-center items-center group-hover:rounded-2xl"
								/>
								<span
									className={`absolute border-2 w-2 bg-white rounded-full -left-1 group-hover:h-8 group-hover:bottom-4 ${
										active ? "h-10 bottom-3" : "h-2 bottom-[43%]"
									}`}
								/>
								<span className="absolute bg-dark left-24 space-x-reverse origin-left scale-0 group-hover:scale-100 transition-all duration-200 px-2 py-1 rounded-lg flex flex-row justify-center items-center">
									<RxTriangleLeft className="w-6 h-6 absolute -left-3 text-dark" />{" "}
									{item.name}
								</span>
							</div>
						</Link>
					);
				})}

				<button
					onClick={() => setIsClosed(!isClosed)}
					className="w-12 h-12 object-cover group flex flex-row justify-center items-center p-2 rounded-full bg-black-700 hover:bg-green hover:rounded-2xl transition-all duration-100 ease-linear mt-2"
				>
					{/* <Image src="/logo/discord-white.png" alt="Discord" width={38} height={28} /> */}
					<IoAddSharp className="w-8 h-8 text-green-light group-hover:text-white" />
					<span className="absolute bg-dark left-24 space-x-reverse origin-left scale-0 group-hover:scale-100 transition-all duration-200 px-2 py-1 rounded-lg w-max flex flex-row justify-center items-center">
						<RxTriangleLeft className="w-6 h-6 absolute -left-3 text-dark" />{" "}
						add server
					</span>
				</button>
			</div>
			{/* create server modal  */}
			{!isClosed && <CreateServer setIsClosed={setIsClosed} />}
		</>
	);
}
