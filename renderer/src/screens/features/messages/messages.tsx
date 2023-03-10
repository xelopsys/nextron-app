import React from "react";
import { ChannelSubmenuMessages } from "@types";
import Message from "@components/ui/message/message";

export default function Messages({
	messages,
}: {
	messages: ChannelSubmenuMessages;
}) {
	return (
		<div className="w-full h-max flex flex-col ">
			{messages &&
				messages?.map((message, index) => {
					return <Message key={index} message={message} />;
				})}
		</div>
	);
}
