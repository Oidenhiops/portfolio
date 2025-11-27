import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Code404() {
    return (_jsx("div", { style: styles.container, children: _jsxs("div", { style: styles.box, children: [_jsx("h4", { style: styles.title, children: "Lo sentimos, la p\u00E1gina no existe!" }), _jsx("p", { style: styles.description, children: "Lo sentimos, no pudimos encontrar la p\u00E1gina que est\u00E1s buscando. \u00BFQuiz\u00E1s has escrito mal la URL? Aseg\u00FArese de revisar su ortograf\u00EDa." })] }) }));
}
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    },
    box: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "0px",
        textAlign: "center",
    },
    description: {
        textAlign: "center",
        color: "#969696",
    },
};
