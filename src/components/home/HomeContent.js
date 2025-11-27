import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
export default function HomeContent({}) {
    return (_jsx(Box, { className: "home-component", component: "main", sx: { display: "flex", flexDirection: "row", width: "100%" }, children: _jsx(Box, { sx: {
                overflowY: "hidden",
                width: "100%",
            }, children: _jsx(Outlet, {}) }) }));
}
