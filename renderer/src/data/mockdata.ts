import { MenuItem } from "../layout/sidebar/sidebar";
import { BiHash, BiVolumeFull } from "react-icons/bi";

const menu: MenuItem[] = [
	{
		name: "Nextjs",
		path: "next",
		link: "/servers/next",
		image: "/images/nextjs.png",
	},
	{
		name: "Electron",
		path: "electron",
		link: "/servers/electron",
		image: "/images/electronjs.png",
	},
];

const channels = {
	next: [
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
					last_updated:
						"Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
					messages: [
						{
							user: {
								name: "Nextjs",
								image: "/images/nextjs.png",
								comment: "Welcome to the Nextjs server!",
								date: "Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
							},
						},
					],
				},
				{
					name: "Rules",
					path: "rules",
					link: "/servers/next/channels/general/rules",
					type: "text",
					last_updated:
						"Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
					messages: [
						{
							user: {
								name: "Nextjs",
								image: "/images/nextjs.png",
								comment: "Please read the rules before posting.",
								date: "Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
							},
						},
					],
				},
				{
					name: "Announcements",
					path: "announcements",
					link: "/servers/next/channels/general/announcements",
					type: "stream",
					last_updated:
						"Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
					messages: [
						{
							user: {
								name: "Nextjs",
								image: "/images/nextjs.png",
								comment: "Announcements",
								date: "Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
							},
						},
					],
				},
			],
		},
		{
			id: 1,
			name: "Development",
			path: "development",
			submenus: [
				{
					name: "Getting Started",
					path: "getting-started",
					link: "/servers/next/channels/development/getting-started",
					type: "text",
					last_updated:
						"Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
					messages: [
						{
							user: {
								name: "Nextjs",
								image: "/images/nextjs.png",
								comment: "Getting started with Nextjs",
								date: "Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
							},
						},
					],
				},
				{
					name: "Tutorials",
					path: "tutorials",
					link: "/servers/next/channels/development/tutorials",
					type: "text",
					last_updated:
						"Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
					messages: [
						{
							user: {
								name: "Nextjs",
								image: "/images/nextjs.png",
								comment: "Tutorials",
								date: "Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
							},
						},
					],
				},
			],
		},
		{
			id: 2,
			name: "Resources",
			path: "resources",
			submenus: [
				{
					name: "Official Website",
					path: "official-website",
					link: "/servers/next/channels/resources/official-website",
					type: "text",
					last_updated:
						"Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
					messages: [
						{
							user: {
								name: "Nextjs",
								image: "/images/nextjs.png",
								comment: `Official Website <a href="https://nextjs.org/"https://nextjs.org/">https://nextjs.org/</a>`,
								date: "Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
							},
						},
					],
				},
				{
					name: "Official Documentation",
					path: "official-documentation",
					link: "/servers/next/channels/resources/official-documentation",
					type: "text",
					last_updated:
						"Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
					messages: [
						{
							user: {
								name: "Nextjs",
								image: "/images/nextjs.png",
								comment: `Official Documentation <a href="https://nextjs.org/docs"https://nextjs.org/docs">https://nextjs.org/docs</a>`,
								date: "Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
							},
						},
					],
				},
			],
		},
	],
	electron: [
		{
			id: 0,
			name: "General",
			path: "general",
			submenus: [
				{
					name: "Welcome",
					path: "welcome",
					link: "/servers/electron/channels/general/welcome",
					type: "text",
					last_updated:
						"Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
					messages: [
						{
							user: {
								name: "Electron",
								image: "/images/electronjs.png",
								comment: "Welcome to the Electron server!",
								date: "Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
							},
						},
					],
				},
				{
					name: "Rules",
					path: "rules",
					link: "/servers/electron/channels/general/rules",
					type: "text",
					last_updated:
						"Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",

					messages: [
						{
							user: {
								name: "Electron",
								image: "/images/electronjs.png",
								comment: "Please read the rules before posting.",
								date: "Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
							},
						},
					],
				},
				{
					name: "Announcements",
					path: "announcements",
					link: "/servers/electron/channels/general/announcements",
					type: "stream",
					last_updated:
						"Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
					messages: [
						{
							user: {
								name: "Electron",
								image: "/images/electronjs.png",
								comment: "Announcements",
								date: "Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
							},
						},
					],
				},
			],
		},
		{
			id: 1,
			name: "Development",
			path: "development",
			submenus: [
				{
					name: "Getting Started",
					path: "getting-started",
					link: "/servers/electron/channels/development/getting-started",
					type: "text",
					last_updated:
						"Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
					messages: [
						{
							user: {
								name: "Electron",
								image: "/images/electronjs.png",
								comment: "Getting started with Electron",
								date: "Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
							},
						},
					],
				},
				{
					name: "Tutorials",
					path: "tutorials",
					link: "/servers/electron/channels/development/tutorials",
					type: "text",
					last_updated:
						"Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
					messages: [
						{
							user: {
								name: "Electron",
								image: "/images/electronjs.png",
								comment: "Tutorials",
								date: "Thu Mar 09 2023 17:16:59 GMT+0500 (Uzbekistan Standard Time)",
							},
						},
					],
				},
			],
		},
	],
};

const typeOfChannels = {
	text: BiHash,
	stream: BiVolumeFull,
};

const users = {
	online: [
		{
			id: 0,
			name: "Nextjs",
			image: "/images/nextjs.png",
			isOnline: true,
		},
	],
	offline: [
		{
			id: 1,
			name: "Electron",
			image: "/images/electronjs.png",
			isOnline: false,
		},
	],
};

const profile = {
	id: "#0001",
	name: "xelopsys",
	image: "/images/profile.jpg",
	title: "Software Engineer",
	isOnline: false,
	isMuted: false,
};

export { menu, channels, typeOfChannels, users, profile };
