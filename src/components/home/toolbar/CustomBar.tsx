import SettingsIcon from '@mui/icons-material/Settings';
import {
	AppBar,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Select,
	Toolbar,
	Typography
} from "@mui/material";
import { type MouseEvent, startTransition, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface HomeContentProps {
	toggleDrawer: () => void;
	switchMode: () => void;
	mode: "light" | "dark";
}

export default function CustomBar({

}: HomeContentProps) {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();

	const [optionUser, setOptionUser] = useState<null | HTMLElement>(null);
	const [notification, setNotification] = useState<null | HTMLElement>(null);

	const openOptionUser = (event: MouseEvent<HTMLButtonElement>) =>
		setOptionUser(event.currentTarget);
	const closeOptionUser = () => setOptionUser(null);
	const closeNotification = () => setNotification(null);

	const handleClick = () => {
		startTransition(() => {
			void navigate("/");
		});
	};

	return (
		<AppBar
			color="transparent"
			position="sticky"
			sx={{
				boxShadow: "none",
				backdropFilter: "blur(20px)",
				top: 0,
				zIndex: (theme) => theme.zIndex.appBar,
			}}
		>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "center",
					borderBottom: "1px solid",
					borderColor: (theme) => theme.palette.divider,
				}}
			>
				<Box sx={{
					display: "flex",
					justifyContent: "center",
				}}>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, cursor: "pointer" }}
						onClick={handleClick}
					>
						{t("shell_title")}
					</Typography>
				</Box>
				<Box sx={{ position: "absolute", right: 16, top: '50%', transform: 'translateY(-50%)' }}>
					<IconButton onClick={openOptionUser}>
						<SettingsIcon />
					</IconButton>
				</Box>
				<Menu
					id={useId()}
					anchorEl={optionUser}
					open={Boolean(optionUser)}
					onClose={closeOptionUser}
					slotProps={{ list: { "aria-labelledby": "basic-button" } }}>
					<Box sx={{ padding: 1 }}>
						<Select
							sx={{ height: 32, width: "100%" }}
							value={i18n.language || "es"}
							onChange={(e) => i18n.changeLanguage(e.target.value)}>
							<MenuItem value="es">Español</MenuItem>
							<MenuItem value="en">English</MenuItem>
						</Select>
					</Box>
				</Menu>
				<Menu
					id={useId()}
					anchorEl={notification}
					open={Boolean(notification)}
					onClose={closeNotification}
					slotProps={{ list: { "aria-labelledby": "basic-button" } }}
				></Menu>
			</Toolbar>
		</AppBar>
	);
}
