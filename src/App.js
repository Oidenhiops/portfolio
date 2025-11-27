import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const [actualTheme, setActualTheme] = useState("dark");
    const theme = useMemo(() => (actualTheme === "light" ? lightTheme : darkTheme), [actualTheme]);
    const themeModeHandler = (mode) => {
        mode
            ? setActualTheme(mode)
            : setActualTheme(actualTheme === "light" ? "dark" : "light");
    };
    return (_jsx(HashRouter, { children: _jsx(ThemeProvider, { theme: theme, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, { mode: actualTheme, switchMode: themeModeHandler }), children: _jsx(Route, { path: "", element: _jsx(Dashboard, {}) }) }), _jsx(Route, { path: "*", element: _jsx(Code404, {}) })] }) }) }));
};
const container = document.getElementById("root");
if (!container)
    throw new Error("Failed to find the root element");
const root = createRoot(container);
root.render(_jsx(App, {}));
