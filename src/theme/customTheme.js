// theme.ts
/**
 * ──────────────────────────────────────────────────────────────────────────────
 * 1) Module augmentation: Palette + Typography
 * ──────────────────────────────────────────────────────────────────────────────
 * - Agregamos palette.table y palette.border como tokens propios (tipados).
 * - Definimos la variante tipográfica "font1" (opcional).
 */
import "@mui/material/styles";
import { alpha, createTheme, } from "@mui/material/styles";
/**
 * ──────────────────────────────────────────────────────────────────────────────
 * 2) Defaults/overrides tipados para componentes
 * ──────────────────────────────────────────────────────────────────────────────
 */
const defaultComponents = {
    MuiSelect: {
        defaultProps: {},
    },
    MuiInput: {
        defaultProps: { size: "small" },
    },
    MuiList: {
        defaultProps: { dense: true },
    },
    MuiTable: {
        defaultProps: { size: "small" },
    },
    MuiTextField: {
        defaultProps: { variant: "outlined" },
    },
    MuiButton: {
        defaultProps: { variant: "outlined" },
        styleOverrides: { root: { textTransform: "none" } },
    },
    MuiDivider: {
        // Si prefieres, mueve esto a styleOverrides.root para consistencia global
        defaultProps: { sx: { paddingTop: 0.5, paddingBottom: 0.5 } },
    },
    // ── Señales de elevación/contraste para superficies (paneles/dialogs) ──────
    MuiPaper: {
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundImage: "none",
                backgroundColor: theme.palette.background.paper,
            }),
        },
    },
    MuiDialog: {
        styleOverrides: {
            paper: ({ theme }) => ({
                backgroundColor: theme.palette.background.paper,
                borderLeft: `1px solid ${theme.palette.divider}`,
                boxShadow: theme.shadows[12],
            }),
        },
    },
    MuiDrawer: {
        styleOverrides: {
            paper: ({ theme }) => ({
                backgroundColor: theme.palette.background.paper,
                borderLeft: `1px solid ${theme.palette.divider}`,
                boxShadow: theme.shadows[8],
            }),
        },
    },
    MuiBackdrop: {
        styleOverrides: {
            root: {
                backgroundColor: "rgba(0,0,0,.35)",
                backdropFilter: "blur(2px)",
            },
        },
    },
};
/**
 * ──────────────────────────────────────────────────────────────────────────────
 * 3) Tipografía base (compartida)
 * ──────────────────────────────────────────────────────────────────────────────
 */
const baseTypography = {
    fontFamily: [
        "Helvetica Neue",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(","),
    // token custom (no variante) útil en sx/theme: theme.typography.fontFamily
    font1: "Helvetica Neue",
};
/**
 * ──────────────────────────────────────────────────────────────────────────────
 * 4) Design tokens por modo (light/dark)
 * ──────────────────────────────────────────────────────────────────────────────
 * - En dark: diferenciamos background.default (base) y background.paper (elevado)
 * - Alineamos divider/border/table a dark
 */
const tokens = {
    dark: {
        palette: {
            mode: "dark",
            primary: {
                main: "#e63a27",
                light: "#e63a27",
            },
            secondary: { main: "#ff6f2dff" },
            // base (fondo) vs superficie elevada (dialogs/paneles)
            background: { default: "#0b0f14", paper: "#131922" },
            divider: alpha("#ffffff", 0.12),
            border: { main: alpha("#ffffff", 0.12) },
            table: {
                selectedRow: { main: "#f5bc1265" },
                borderRow: { main: alpha("#ffffff", 0.12) },
            },
        },
    },
    light: {
        palette: {
            mode: "light",
            primary: {
                main: "#e63a27",
                light: "#e63a27",
            },
            secondary: { main: "#ffca2d" },
            background: { default: "#faf9f4", paper: "#fcfae1" },
            divider: "#3d3d3dff",
            border: { main: "#565554" },
            table: {
                selectedRow: { main: "#f3f2f1" },
                borderRow: { main: "#f3f3f3" },
            },
        },
    },
};
export const createAppTheme = (mode) => createTheme({
    shape: { borderRadius: 8 },
    components: defaultComponents,
    typography: {
        ...baseTypography,
        fontSize: 12,
    },
    palette: tokens[mode].palette,
});
export const lightTheme = createAppTheme("light");
export const darkTheme = createAppTheme("dark");
/**
 * ──────────────────────────────────────────────────────────────────────────────
 * 6) Ejemplos de uso de tokens en sx
 * ──────────────────────────────────────────────────────────────────────────────
 *
 *  sx={{
 *    borderColor: (t) => t.palette.border.main,
 *    '& tbody tr.Mui-selected': {
 *      backgroundColor: (t) => t.palette.table.selectedRow.main,
 *      outline: (t) => `1px solid ${t.palette.table.borderRow.main}`,
 *    },
 *  }}
 */
