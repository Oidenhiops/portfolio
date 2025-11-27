import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

interface HomeContentProps {
	switchMode: () => void;
	mode: "light" | "dark";
}

export default function HomeContent({ }: HomeContentProps) {
	return (
		<Box
			className="home-component"
			component="main"
			sx={{ display: "flex", flexDirection: "row", width: "100%" }}
		>
			<Box
				sx={{
					overflowY: "hidden",
					width: "100%",
				}}
			>
				<Outlet />
			</Box>
		</Box>
	);
}
