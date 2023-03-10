import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
	type,
	placeholder,
	name,
	onChange,
}: InputProps) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			name={name}
			onChange={onChange}
			className="w-full bg-black-600 rounded-md p-3 text-white-100 focus:outline-purple focus:ring-2 ring-purple"
		/>
	);
}
