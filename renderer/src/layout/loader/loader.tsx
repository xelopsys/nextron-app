import React from "react";
import Image from "next/image";

export default function Loader() {
	return (
		<div className="w-full h-screen flex flex-col justify-center items-center">
			<div className="animate-spin-slow">
				<Image
					src="/logo/discord-white.png"
					width={60}
					height={50}
					className=""
					alt="discord-logo"
				/>
			</div>
			<h1 className="my-3">Loading for you, so please wait...{")"}</h1>
		</div>
	);
}
