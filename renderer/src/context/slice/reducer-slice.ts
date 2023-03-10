import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { channels, menu } from "@data/mockdata";
import {
	ReducerSliceAddMessage,
	ReducerSliceAddChannel,
	ReducerSliceUpdateChannelName,
	ReducerSliceAddServer,
	ReducerSliceAddSubmenu,
} from "@types";

const initialState = {
	...channels,
	"[menu]": [...menu],
};

const reducer = createSlice({
	name: "reducer",
	initialState,
	reducers: {
		addNewMessage: (
			state,
			{ payload }: PayloadAction<ReducerSliceAddMessage>
		) => {
			const { server, channel, submenu, message } = payload;
			state[server]
				?.find((item) => item.path === channel)
				?.submenus?.find((item) => item.path === submenu)
				?.messages?.push(message);
		},

		addNewChannel: (
			state,
			{ payload }: PayloadAction<ReducerSliceAddChannel>
		) => {
			const { server, channel } = payload;
			state[server].push(channel);
		},

		addNewServer: (
			state,
			{ payload }: PayloadAction<ReducerSliceAddServer>
		) => {
			const { server, image, date, path } = payload;
			// state[server] = [channel];
			state["[menu]"].push({
				name: server,
				path,
				image: image,
				link: `/servers/${path}`,
			});
			state[server] = [
				{
					id: 0,
					name: "General",
					path: "general",
					submenus: [
						{
							name: "Welcome",
							path: "welcome",
							link: "/servers/next/channels/general/welcome",
							type: "text",
							last_updated: date,
							messages: [
								{
									user: {
										name: server,
										image,
										comment: `Welcome to the ${server} server!`,
										date,
									},
								},
							],
						},
					],
				},
			];
		},
		updateChannelName: (
			state,
			{ payload }: PayloadAction<ReducerSliceUpdateChannelName>
		) => {
			const { server, channel, name } = payload;
			state[server].find((item) => item.path === channel).name = name;
		},
	},
});

export const { addNewMessage, addNewChannel, addNewServer, updateChannelName } =
	reducer.actions;
export default reducer.reducer;
