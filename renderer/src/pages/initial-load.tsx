import React from "react";
import Loader from "@layout/loader/loader";

function Home() {
	return (
		<>
			<div className="flex flex-row w-full h-full">
				<Loader />
			</div>
		</>
	);
}

export default Home;
