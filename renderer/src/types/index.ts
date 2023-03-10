import { channels, users, profile, menu } from "@data/mockdata";
import { store } from "../context/store/store";
export type { MenuItem } from "../layout/sidebar/sidebar";

export type Channel = keyof typeof channels;

export type userTypes = keyof typeof users;

export type ProfileType = typeof profile;

export type Channels = typeof channels;

export type ChannelsType = typeof channels[Channel];

export type ChannelType = typeof channels[Channel][0];

export type users = typeof users[userTypes];

export type ChannelSubmenu = typeof channels["next"][0]["submenus"];

export type ChannelSubmenuType = typeof channels["next"][0]["submenus"][0];

export type ChannelSubmenuMessages =
	typeof channels["next"][0]["submenus"][0]["messages"];

export type ChannelSubmenuMessage =
	typeof channels["next"][0]["submenus"][0]["messages"][0];

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type ReducerSliceAddMessage = {
	server: Channel;
	channel: ChannelType["path"];
	submenu: ChannelSubmenuType["path"];
	message: ChannelSubmenuMessage;
};

export type ReducerSliceAddChannel = {
	server: Channel;
	channel: ChannelType;
};

export type ReducerSliceAddSubmenu = {
	server: Channel;
	channel: ChannelType["path"];
	submenu: ChannelSubmenuType["path"];
};

export type ReducerSliceUpdateChannelName = {
	server: Channel;
	channel: ChannelType["path"];
	name: string;
};

export type ReducerSliceAddServer = {
	server: Channel | string;
	path: string;
	image: string;
	date: string;
};
