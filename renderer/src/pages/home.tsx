import React from "react";
import Head from "next/head";
import Welcome from "@screens/features/welcome/welcome";

function Home() {
	return (
		<>
			<Head>
				<title>Discord</title>
			</Head>
			<div className="flex flex-col h-full w-full relative items-center justify-center box-border overflow-y-scroll scrollbar-thin scrollbar-thumb-black-900 scrollbar-track-black-600 scroll-smooth">
				<Welcome serverName="Xelopsys" channelName="" />
			</div>{" "}
		</>
	);
}

export default Home;
