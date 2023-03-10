import React from "react";
import { users } from "@data/mockdata";
import Image from "next/image";

export default function Users() {
	return (
		<div className="flex flex-col justify-start items-center w-64 h-full sticky right-0 bg-black-800 p-4 box-border">
			<section className="w-full h-max justify-start items-center my-3">
				<h1 className="w-full text-left text-gray-500">{`Online - ${users?.online?.length}`}</h1>
				{users?.online.map((user) => (
					<div className="flex flex-row justify-start items-center w-full h-12 mb-2 relative">
						<div className="relative">
							<Image
								className="w-10 h-10 rounded-full object-cover"
								src={user?.image}
								alt=""
								width={40}
								height={40}
							/>
							<span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-light border-2 border-white dark:border-gray-800 rounded-full"></span>
						</div>
						<div className="flex flex-col justify-start items-start ml-2">
							<span className="text-gray-400 font-semibold text-sm">
								{user?.name}
							</span>
						</div>
					</div>
				))}
			</section>
			<section className="w-full h-max justify-start items-center my-3">
				<h1 className="w-full text-left text-gray-500">{`Offline - ${users?.offline?.length}`}</h1>
				{users?.offline.map((user) => (
					<div className="flex flex-row justify-start items-center w-full h-12 mb-2 relative">
						<div className="relative">
							<Image
								className="w-10 h-10 rounded-full object-cover"
								src={user?.image}
								alt=""
								width={40}
								height={40}
							/>
							<span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-red border-2 border-white dark:border-gray-800 rounded-full"></span>
						</div>
						<div className="flex flex-col justify-start items-start ml-2">
							<span className="text-gray-400 font-semibold text-sm">
								{user?.name}
							</span>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}
