import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Modal({
	children,
	setIsClosed,
}: {
	children: React.ReactNode;
	setIsClosed: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const handleClick = () => {
		setIsClosed(true);
	};
	return (
		<div className="fixed right-0 z-50  p-4 overflow-x-hidden overflow-hidden md:inset-0 w-full h-full backdrop-blur-sm flex flex-row justify-center items-start">
			<div className="relative w-96 h-max max-w-2xl md:h-auto bg-black-900 p-10 flex flex-col justify-center items-center my-16 rounded-lg">
				<button
					onClick={handleClick}
					className="absolute right-2 top-2 hover:opacity-60"
				>
					<AiOutlineCloseCircle className="w-6 h-6" />
				</button>
				{children}
			</div>
		</div>
	);
}
