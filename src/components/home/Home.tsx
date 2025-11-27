import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Grid2 from "@mui/material/Grid";
import { useState } from "react";

import HomeContent from "./HomeContent";
import CustomBar from "./toolbar/CustomBar";

interface HomeProps {
	switchMode: () => void;
	mode: "light" | "dark";
}

export default function Home({ switchMode, mode }: HomeProps) {

	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<Grid2
			container
			className="home-container"
			sx={{
				flexGrow: 1,
				height: "100%",
				alignItems: "flex-start",
				alignContent: "flex-start",
			}}
		>
			<CssBaseline />
			<CustomBar
				switchMode={switchMode}
				toggleDrawer={() => {
					setMobileOpen(!mobileOpen);
				}}
				mode={mode}
			/>
			<Box
				className="home-content"
				component="main"
				sx={{
					flexGrow: 1,
					width: "100%",
					height: "calc(100% - 64px)",
					overflow: "auto",
				}}
			>
				<HomeContent
					switchMode={() => {
						switchMode();
					}}
					mode={mode}
				/>
			</Box>
		</Grid2>
	);
}
