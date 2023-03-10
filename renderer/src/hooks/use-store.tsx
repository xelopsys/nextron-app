import { useAppDispatch, useAppSelector } from "@context/hooks/hooks";
import {
	addNewMessage,
	addNewChannel,
	addNewServer,
	updateChannelName,
} from "@context/slice/reducer-slice";
import {
	ReducerSliceAddChannel,
	ReducerSliceAddMessage,
	ReducerSliceAddSubmenu,
	ReducerSliceAddServer,
	ReducerSliceUpdateChannelName,
} from "@types";

export default function useStore() {
	const dispatch = useAppDispatch();

	const getChannelMessages = ({
		server,
		channel,
		submenu,
	}: ReducerSliceAddSubmenu) => {
		return useAppSelector(
			(element) =>
				element[server]
					?.find((item: any) => item?.path === channel)
					?.submenus?.find((item: any) => item?.path === submenu)?.messages
		);
	};

	const servers = useAppSelector((element) => element["[menu]"]);

	const addNewMessageToStore = ({
		message,
		server,
		channel,
		submenu,
	}: ReducerSliceAddMessage) => {
		dispatch(addNewMessage({ message, server, channel, submenu }));
	};

	const addNewChannelToStore = ({
		channel,
		server,
	}: ReducerSliceAddChannel) => {
		dispatch(addNewChannel({ channel, server }));
	};

	const addNewServerToStore = ({
		server,
		// channel,
		image,
		date,
		path,
	}: ReducerSliceAddServer) => {
		dispatch(addNewServer({ server, date, image, path }));
	};

	const updateChannelInStore = ({
		channel,
		server,
		name,
	}: ReducerSliceUpdateChannelName) => {
		dispatch(updateChannelName({ channel, server, name }));
	};

	return {
		servers,
		getChannelMessages,
		addNewServerToStore,
		addNewMessageToStore,
		addNewChannelToStore,
		updateChannelInStore,
	};
}
