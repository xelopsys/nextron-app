import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function FileInput({ name, onChange }: FileInputProps) {
	return (
		<>
			<label
				htmlFor="file"
				className="w-full bg-black-600 rounded-md p-3 text-white-100 focus:outline-purple focus:ring-2 ring-purple text-center flex flex-col justify-center items-center text-sm"
			>
				<AiOutlineCloudUpload className="w-6 h-6" />
				Upload Image
			</label>
			<input
				id="file"
				type="file"
				name={name}
				onChange={onChange}
				typeof="file"
				accept="image/*"
				className="hidden"
			/>
		</>
	);
}
