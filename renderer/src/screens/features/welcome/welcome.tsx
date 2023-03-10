import React from "react";
import { FiAlertCircle, FiTwitter, FiUserPlus, FiTablet } from "react-icons/fi";

export default function Welcome({
	serverName,
	channelName,
}: {
	serverName: string;
	channelName: string;
}) {
	const features = [
		{
			icon: FiAlertCircle,
			title: `Learn about ${serverName} server`,
			description: `This is beginning of your journey in ${serverName}`,
		},
		{
			icon: FiTwitter,
			title: "Share your thoughts",
			description: `This is beginning of your journey in ${serverName}`,
		},
		{
			icon: FiUserPlus,
			title: "Meet new people",
			description: `This is beginning of your journey in ${serverName}`,
		},
		{
			icon: FiTablet,
			title: "Stay connected",
			description: `This is beginning of your journey in ${serverName}`,
		},
	];

	return (
		<div className="w-full h-max flex flex-col justify-center items-center py-6">
			<section className="w-full flex flex-col justify-center items-center h-max px-4 my-5">
				<h1 className="text-3xl text-center">
					Welcome to {serverName} - {channelName} server
				</h1>
				<p className="text-center text-sm font-medium text-gray-400">
					This is beginning of your journey in {serverName}
				</p>
			</section>
			<div className="w-max h-max flex flex-col justify-center items-center gap-y-4">
				{features.map((feature, index) => {
					return (
						<div
							key={index}
							className="w-full h-max flex flex-row justify-evenly items-center gap-x-6"
						>
							<feature.icon className="w-10 h-10 text-purple object-cover" />
							<div className="w-max h-max flex flex-col justify-center items-start">
								<h1 className="text-xl font-medium text-purple">
									{feature.title}
								</h1>
								<p className="text-center text-xs font-medium text-gray-400">
									{feature.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
