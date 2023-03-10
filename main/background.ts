import { app } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";

const isProd: boolean = process.env.NODE_ENV === "production";

if (isProd) {
	serve({ directory: "app" });
} else {
	app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
	await app.whenReady();

	const mainWindow = createWindow("main", {
		width: 1000,
		minWidth: 900,
		height: 600,
		minHeight: 500,
		opacity: 0,
	});

	const initialLoadWindow = createWindow("initial-load", {
		width: 300,
		height: 200,
		frame: false,
		backgroundColor: "#000000",
		transparent: true,
		webPreferences: {
			nodeIntegration: true,
		},

		alwaysOnTop: true,
		parent: mainWindow,
	});

	if (isProd) {
		await initialLoadWindow.loadURL("app://./initial-load.html");
		await mainWindow.loadURL("app://./home.html");
	} else {
		const port = process.argv[2];
		await initialLoadWindow.loadURL(`http://localhost:${port}/initial-load`);

		setTimeout(async () => {
			await mainWindow.loadURL(`http://localhost:${port}/home`);
			mainWindow.setOpacity(1);
			initialLoadWindow.close();
		}, 1000);
	}
})();

app.on("window-all-closed", () => {
	app.quit();
});
