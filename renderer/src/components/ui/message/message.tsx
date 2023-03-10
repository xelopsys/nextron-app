import React from "react";
import Image from "next/image";
import { ChannelSubmenuMessage } from "@types";

export default function Message({
	message,
}: {
	message: ChannelSubmenuMessage;
}) {
	const time = `${new Date(message?.user?.date).getHours()}:${new Date(
		message?.user?.date
	).getMinutes()}:${new Date(message?.user?.date).getSeconds()}`;

	console.log(message?.user?.date, "from message");

	return (
		<div className="w-full h-max">
			<div className="flex flex-row py-2 px-4">
				<Image
					src={message?.user?.image}
					width={50}
					height={50}
					className="object-cover rounded-full"
				/>
				<div className="mx-3 flex text-lg flex-col justify-center items-start">
					<h1>
						{message?.user?.name}
						<span className="text-gray-400 font-normal text-xs mx-2">
							{`${new Date(message?.user?.date).getFullYear()}-${new Date(
								message?.user?.date
							).getDate()}-${new Date(message?.user?.date).getMonth()} ${time}`}
						</span>
					</h1>
					<p
						className="text-sm"
						dangerouslySetInnerHTML={{ __html: message?.user?.comment }}
					/>
				</div>
			</div>
		</div>
	);
}
