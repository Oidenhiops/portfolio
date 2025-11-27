import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Grid2 from "@mui/material/Grid";
import { useState } from "react";
import HomeContent from "./HomeContent";
import CustomBar from "./toolbar/CustomBar";
export default function Home({ switchMode, mode }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (_jsxs(Grid2, { container: true, className: "home-container", sx: {
            flexGrow: 1,
            height: "100%",
            alignItems: "flex-start",
            alignContent: "flex-start",
        }, children: [_jsx(CssBaseline, {}), _jsx(CustomBar, { switchMode: switchMode, toggleDrawer: () => {
                    setMobileOpen(!mobileOpen);
                }, mode: mode }), _jsx(Box, { className: "home-content", component: "main", sx: {
                    flexGrow: 1,
                    width: "100%",
                    height: "calc(100% - 64px)",
                    overflow: "auto",
                }, children: _jsx(HomeContent, { switchMode: () => {
                        switchMode();
                    }, mode: mode }) })] }));
}
