import React from "react";
import type { AppProps } from "next/app";
import Sidebar from "@layout/sidebar/sidebar";
import Users from "@layout/users/users";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "@context/store/store";

import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter();
	return (
		<Provider store={store}>
			<div className="flex flex-row w-screen h-screen overflow-hidden bg-black-700">
				{pathname !== "/initial-load" && <Sidebar />}
				<main className="w-full h-full">
					<Component {...pageProps} />
				</main>
				{pathname !== "/initial-load" && <Users />}
			</div>
		</Provider>
	);
}

export default MyApp;
