import React, { useState } from "react";
import Modal from "@components/ui/modal/modal";
import { AiOutlineArrowRight } from "react-icons/ai";
import Input from "@components/form/input";
import FileInput from "@components/form/file-input";
import useStore from "@hooks/use-store";
import PreviewImage from "@screens/features/preview-image/preview-image";

export default function CreateServer({
	setIsClosed,
}: {
	setIsClosed: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [isNext, setIsNext] = useState(false);
	const [file, setFile] = useState(null);
	const [serverImage, setServerImage] = useState(null);
	const { addNewServerToStore } = useStore();

	const handleAddMore = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(e.target["file-input"]?.value);
		addNewServerToStore({
			server: e.target["name-input"]?.value,
			path: e.target["name-input"]?.value?.toLowerCase()?.replace(" ", "-"),
			image: `${serverImage}`,
			date: `${new Date()}`,
		});
		setIsClosed(true);
	};

	const handleOnChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files[0];
		setFile(file);
	};

	React.useEffect(() => {
		const reader = new FileReader();
		const load = async () => {
			await reader.readAsDataURL(new Blob([file], { type: "image/*" }));
		};
		load();
		reader.onloadend = () => {
			setServerImage(reader.result);
		};
	}, [file]);

	return (
		<Modal setIsClosed={setIsClosed}>
			{!isNext ? (
				<button
					onClick={() => setIsNext(!isNext)}
					className="w-full h-max py-3 bg-black-600 rounded-lg hover:opacity-60 flex flex-row justify-center items-end gap-4"
				>
					Create Server
					<AiOutlineArrowRight className="w-6 h-6" />
				</button>
			) : (
				<form
					onSubmit={handleAddMore}
					className="w-full flex flex-col items-center justify-center gap-y-6"
				>
					<PreviewImage file={file} />
					<Input
						className="w-full"
						placeholder="Server Name"
						type="text"
						name="name-input"
					/>
					<FileInput name="file-input" onChange={handleOnChangeFile} />
					<button className="w-full h-max py-3 bg-purple rounded-lg hover:opacity-60 flex flex-row justify-center items-end gap-4">
						Create
					</button>
				</form>
			)}
		</Modal>
	);
}
