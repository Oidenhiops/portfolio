import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Box, IconButton, Menu, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { startTransition, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
export default function CustomBar({}) {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [optionUser, setOptionUser] = useState(null);
    const [notification, setNotification] = useState(null);
    const openOptionUser = (event) => setOptionUser(event.currentTarget);
    const closeOptionUser = () => setOptionUser(null);
    const closeNotification = () => setNotification(null);
    const handleClick = () => {
        startTransition(() => {
            void navigate("/");
        });
    };
    return (_jsx(AppBar, { color: "transparent", position: "sticky", sx: {
            boxShadow: "none",
            backdropFilter: "blur(20px)",
            top: 0,
            zIndex: (theme) => theme.zIndex.appBar,
        }, children: _jsxs(Toolbar, { sx: {
                display: "flex",
                justifyContent: "center",
                borderBottom: "1px solid",
                borderColor: (theme) => theme.palette.divider,
            }, children: [_jsx(Box, { sx: {
                        display: "flex",
                        justifyContent: "center",
                    }, children: _jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1, cursor: "pointer" }, onClick: handleClick, children: t("shell_title") }) }), _jsx(Box, { sx: { position: "absolute", right: 16, top: '50%', transform: 'translateY(-50%)' }, children: _jsx(IconButton, { onClick: openOptionUser, children: _jsx(SettingsIcon, {}) }) }), _jsx(Menu, { id: useId(), anchorEl: optionUser, open: Boolean(optionUser), onClose: closeOptionUser, slotProps: { list: { "aria-labelledby": "basic-button" } }, children: _jsx(Box, { sx: { padding: 1 }, children: _jsxs(Select, { sx: { height: 32, width: "100%" }, value: i18n.language || "es", onChange: (e) => i18n.changeLanguage(e.target.value), children: [_jsx(MenuItem, { value: "es", children: "Espa\u00F1ol" }), _jsx(MenuItem, { value: "en", children: "English" })] }) }) }), _jsx(Menu, { id: useId(), anchorEl: notification, open: Boolean(notification), onClose: closeNotification, slotProps: { list: { "aria-labelledby": "basic-button" } } })] }) }));
}
