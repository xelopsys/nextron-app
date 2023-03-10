import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function PreviewImage({ file }) {
	const [imagePreviewUrl, setImagePreviewUrl] = useState(undefined);

	useEffect(() => {
		const reader = new FileReader();
		const load = async () => {
			await reader.readAsDataURL(new Blob([file], { type: "image/*" }));
		};
		load();
		reader.onloadend = () => {
			setImagePreviewUrl(reader.result);
		};
	}, [file]);

	return (
		<div className="w-[110px] h-[110px] border-2 rounded-full p-1 border-purple flex justify-center items-center">
			{file ? (
				imagePreviewUrl ? (
					<Image
						width="104"
						height="104"
						src={imagePreviewUrl}
						alt="Preview"
						className=" object-cover rounded-full"
					/>
				) : (
					<span>"Uploading..."</span>
				)
			) : (
				<span className="text-gray-300 text-sm">Upload Image</span>
			)}
		</div>
	);
}
