import "./index.css";

import { ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import Code404 from "@core/Code404";
import Dashboard from "./components/home/dashboard/Dashboard";
import Home from "./components/home/Home";
import { darkTheme, lightTheme } from "./theme/customTheme";

const App = () => {
	const [actualTheme, setActualTheme] = useState<"light" | "dark">("dark");

	const theme = useMemo(
		() => (actualTheme === "light" ? lightTheme : darkTheme),
		[actualTheme],
	);

	const themeModeHandler = (mode?: "light" | "dark") => {
		mode
			? setActualTheme(mode)
			: setActualTheme(actualTheme === "light" ? "dark" : "light");
	};

	return (
		<HashRouter>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route
						path="/"
						element={
							<Home mode={actualTheme} switchMode={themeModeHandler} />
						}
					>
						<Route path="" element={<Dashboard />} />
					</Route>
					<Route path="*" element={<Code404 />} />
				</Routes>
			</ThemeProvider>
		</HashRouter>
	);
};

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);
root.render(<App />);
