import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import EchoesOfTheAbyss from '@assets/images/EchoesOfTheAbyss.png';
import JumpTillTheEnd from '@assets/images/JumpTillTheEnd.webp';
import Patotective from '@assets/images/Patotective.webp';
import Profile from '@assets/images/Profile.jpeg';
import SkylandSurvivor from '@assets/images/SkylandSurvivor.webp';
import EchoesOfTheAbyssVid from '@assets/videos/EchoesOfTheAbyssVid.mp4';
import JumpTillTheEndVid from '@assets/videos/JumpTillTheEndVid.mp4';
import SkylandSurvivorVid from '@assets/videos/SkylandSurvivorVid.mp4';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DashboardMoreInfo from '@components/home/dashboard/DashboardMoreInfo';
import './dashboard.css';
export default function Dashboard() {
    const { t } = useTranslation();
    const proyects = [
        {
            id: 0,
            image: Patotective,
            alt: "Patotective",
            categories: ["Misterio", "Acción"],
            title: "Patotective Cuak",
            description: "Eres un pequeño detective intentando resolver el caso sobre la desaparición de tu hija, enfrenta diversos desafíos para rescatarla.",
            technologies: ["Unity 3D", "C#"],
            video: JumpTillTheEndVid,
            moreInfo: {
                details: "Patotective Cuak es un juego corto donde un pato detective descubre que su hija fue secuestrada. Tendrás que interrogar a diferentes personajes en un parque para averiguar si saben algo sobre su paradero. Es un juego divertido de peleas de patos en tiempo real, no muy complejo, pero los ragdolls hacen que las peleas sean entretenidas y la historia da un giro inesperado al final.",
                challenges: "El mayor reto fue lograr que las físicas ragdoll fueran divertidas y crearan situaciones inesperadas en las peleas, además de equilibrar la simpleza del combate con la narrativa. También fue un desafío mantener la experiencia fluida y sin bugs, dado el comportamiento impredecible de los ragdolls.",
                learnings: "Aprendí a implementar físicas ragdoll en Unity y a diseñar mecánicas de combate simples pero entretenidas. También mejoré en la integración de narrativa con jugabilidad y en la optimización de juegos pequeños para que sean pulidos y divertidos.",
                demo: "#",
            }
        },
        {
            id: 1,
            image: JumpTillTheEnd,
            alt: "Jump Till The End",
            categories: ["Aventura"],
            title: "Jump Till The End",
            description: "Tu nave fue impactada por un meteorito, ahora deberás recuperar los fragmentos de tu nave que se esparcieron por un extraño planeta.",
            technologies: ["Unity 2D", "C#"],
            video: JumpTillTheEndVid,
            moreInfo: {
                details: "Jump Till The End es un juego mobile donde controlas a un pequeño alienígena similar a un slime que, tras chocar su nave con un meteorito, debe recuperar las piezas perdidas en un planeta inhóspito. El objetivo es superar diferentes niveles saltando, esquivando obstáculos y enemigos para recuperar las partes de la nave y desentrañar la historia oculta del planeta. Además, el juego cuenta con soporte multilenguaje para llegar a una audiencia global.",
                challenges: "El mayor reto fue diseñar controles de salto precisos y satisfactorios para dispositivos móviles, así como crear niveles que fueran desafiantes pero accesibles. También fue un desafío optimizar el rendimiento para distintos modelos de teléfonos y mantener una curva de dificultad equilibrada a lo largo del juego.",
                learnings: "Este proyecto me permitió mejorar mis habilidades en el desarrollo de juegos para móviles, especialmente en la optimización de recursos y el diseño de controles táctiles. Aprendí sobre la importancia del feedback visual y sonoro para la experiencia del usuario y sobre cómo estructurar niveles para mantener el interés y la progresión.",
                demo: "#",
            }
        },
        {
            id: 2,
            image: SkylandSurvivor,
            alt: "Skyland Survivor",
            categories: ["Aventura", "Acción"],
            title: "Skyland Survivor",
            description: "Eres el último mago en pie, con tu ingenio y tu isla voladora, deberás sobrevivir ante hordas de enemigos para restablecer tu mundo.",
            technologies: ["Unity 2D", "C#"],
            video: SkylandSurvivorVid,
            moreInfo: {
                details: "Skyland Survivor es un juego que fusiona la acción tipo Vampire Survivor con mecánicas de construcción (builder) y exploración de mazmorras al estilo Zelda. El jugador controla a un mago que debe defender su isla flotante de oleadas de enemigos, pero también puede explorar mazmorras generadas proceduralmente para conseguir planos de nuevas armas y mejoras para su base principal. El juego destaca por su sistema de progresión, la integración de varios géneros y el soporte multi lenguaje, permitiendo a jugadores de diferentes regiones disfrutar la experiencia.",
                challenges: "El mayor reto fue equilibrar la jugabilidad entre la defensa de la base y la exploración de mazmorras, asegurando que ambas mecánicas fueran igual de atractivas. Implementar mapas procedurales y un sistema de recompensas significativo para la exploración requirió mucha iteración. Además, optimizar el rendimiento para que los mapas grandes y la IA de los enemigos funcionaran bien en todo tipo de dispositivos fue un desafío técnico importante.",
                learnings: "Este proyecto me permitió profundizar en la generación procedural de mapas, el diseño de sistemas de progresión y la integración de múltiples géneros en un solo juego. Mejoré mis habilidades en optimización, balanceo de dificultad y localización (multi lenguaje), así como en la creación de experiencias de usuario más ricas y rejugables.",
                demo: "#",
            }
        },
        {
            id: 3,
            image: EchoesOfTheAbyss,
            alt: "Echoes Of The Abyss",
            categories: ["RPG", "Acción", "Aventura"],
            title: "Echoes Of The Abyss",
            description: "Una aventura rogelike donde tendrás que avanzar por un lugar inhóspito luego de quedar atrapado en un antiguo laberinto.",
            technologies: ["Unity 3D", "C#"],
            video: EchoesOfTheAbyssVid,
            moreInfo: {
                details: "Echoes of the Abyss es un tactical RPG en 2.5D con elementos rogelike, donde tras quedar atrapado en un antiguo laberinto deberás explorar sus profundidades, reunir items, mejorar tus habilidades y reclutar compañeros que también han quedado atrapados. Cada expedición es única gracias a la generación procedural de escenarios y eventos, y el jugador debe tomar decisiones estratégicas para sobrevivir y descubrir los secretos del abismo. El juego está disponible para PC y dispositivos móviles, y en ambas plataformas cuenta con adaptación para jugar con mando.",
                challenges: "El principal reto fue diseñar un sistema de combate táctico que resultara desafiante y satisfactorio, así como equilibrar la dificultad de la exploración rogelike con la progresión del jugador. Implementar la generación procedural de mapas y eventos, y crear una IA convincente para los aliados y enemigos, requirió mucha iteración y pruebas. Además, lograr una ambientación inmersiva en 2.5D fue un desafío artístico y técnico.",
                learnings: "Este proyecto me permitió profundizar en el diseño de sistemas de combate táctico, generación procedural y narrativa emergente. Aprendí sobre balanceo de dificultad, diseño de IA para compañeros y enemigos, y cómo crear una experiencia de exploración rejugable. También mejoré mis habilidades en Unity, C# y en la integración de arte 2D y 3D para lograr una estética coherente.",
                systems: [
                    {
                        name: "Generador Automático de Animaciones",
                        description: "Sistema que, al recibir el tilemap de un personaje, genera automáticamente todas las animaciones necesarias (caminar, atacar, recibir daño, etc.) con solo presionar un botón. Esto optimiza y acelera la integración de nuevos personajes, reduciendo el tiempo de producción de arte y animaciones."
                    },
                    {
                        name: "Tilemap 3D Dinámico",
                        description: "Desarrollé un sistema de tilemap en 3D donde cada bloque puede tener diferentes modelos y texturas, permitiendo crear mundos mucho más variados y ricos visualmente."
                    },
                    {
                        name: "Editor de Capas para Mapas",
                        description: "Implementé un sistema de capas que permite pintar y editar los mundos desde un editor personalizado, facilitando el control y la creación eficiente de mapas complejos y detallados."
                    }
                ],
                demo: "#",
            }
        },
    ];
    const skills = [
        "Unity Engine 3D/2D",
        "Programación (C#)",
        "Diseño de Niveles",
        "Game Design",
        "Generalista 3D",
        "Generalista 2D"
    ];
    const [showGifIdx, setShowGifIdx] = React.useState(null);
    const [moreInfo, setMoreInfo] = useState(false);
    const hoverTimeout = React.useRef(null);
    const [proyectSelected, setProyectSelected] = useState(null);
    const handleMouseEnter = (idx) => {
        hoverTimeout.current = setTimeout(() => setShowGifIdx(idx), 600);
    };
    const handleMouseLeave = () => {
        if (hoverTimeout.current)
            clearTimeout(hoverTimeout.current);
        setShowGifIdx(null);
    };
    return (_jsxs(Box, { sx: { overflowX: "hidden" }, children: [_jsxs(Box, { children: [_jsx(Box, { component: "section", id: "inicio", className: "hero", children: _jsx(Box, { className: "hero-content", children: _jsx(Typography, { variant: "h2", className: "hero-title", children: t("dashboard_hero_title") }) }) }), _jsx(Box, { component: "section", id: "sobre-mi", className: "sobre-mi", children: _jsxs(Container, { className: "container", children: [_jsx(Typography, { variant: "h2", className: "section-title", children: "Sobre M\u00ED" }), _jsxs(Box, { className: "sobre-mi-content", sx: { display: "flex", flexDirection: "column" }, children: [_jsxs(Box, { sx: {
                                                display: "flex",
                                                flexDirection: "row",
                                                gap: 4,
                                            }, children: [_jsx(Box, { className: "sobre-mi-texto", children: _jsx(Typography, { children: t("dashboard_about_me_text") }) }), _jsx(Box, { component: "img", src: Profile, alt: "Profile", sx: {
                                                        maxWidth: 400,
                                                        width: '100%',
                                                        borderRadius: '16px',
                                                        boxShadow: '0 0 40px 0 rgba(0,243,255,0.3), 0 0 0 4px var(--neon-cyan)',
                                                        border: '2px solid var(--neon-cyan)',
                                                        background: 'linear-gradient(135deg, var(--neon-purple), var(--neon-pink))',
                                                        objectFit: 'cover',
                                                        marginLeft: 'auto',
                                                        marginRight: 'auto',
                                                        display: 'block',
                                                    } })] }), _jsxs(Box, { className: "sobre-mi-habilidades", sx: { display: "flex", flexDirection: "column", width: "100%" }, children: [_jsx(Typography, { variant: "h3", sx: { display: "flex", justifyContent: "center" }, children: "Habilidades" }), _jsx("ul", { className: "habilidades-list", children: skills.map((skill, index) => (_jsx("li", { children: skill }, index))) })] })] })] }) }), _jsx(Box, { component: "section", id: "proyectos", className: "proyectos", children: _jsxs(Container, { className: "container", children: [_jsx(Typography, { variant: "h2", className: "section-title", sx: { display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: 4 }, children: "Mis Proyectos" }), _jsx(Box, { sx: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "20px",
                                        justifyContent: "center"
                                    }, children: proyects.map((proyecto) => (_jsxs(Box, { component: "article", className: "proyecto-card", sx: { width: "350px !important" }, onMouseEnter: () => handleMouseEnter(proyecto.id), onMouseLeave: handleMouseLeave, children: [_jsxs(Box, { className: "proyecto-imagen", sx: { position: "relative" }, children: [_jsx("img", { src: proyecto.image, alt: proyecto.alt, className: "proyecto-img" }), showGifIdx === proyecto.id && proyecto.video && (_jsx(Box, { component: "video", src: proyecto.video, autoPlay: true, loop: true, muted: true, playsInline: true, sx: {
                                                            position: "absolute",
                                                            top: 0,
                                                            left: 0,
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                            zIndex: 2,
                                                            borderRadius: "inherit"
                                                        } })), _jsx(Box, { className: "proyecto-overlay", children: proyecto.categories.map((cat, i) => (_jsx("span", { className: "proyecto-categoria", children: cat }, i))) })] }), _jsxs(Box, { className: "proyecto-info", sx: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 2
                                                }, children: [_jsx(Typography, { variant: "h4", className: "proyecto-titulo", children: proyecto.title }), _jsx(Typography, { children: proyecto.description }), _jsx(Box, { className: "proyecto-tecnologias", children: proyecto.technologies.map((tec, i) => (_jsx("span", { className: "tecnologia-tag", children: tec }, i))) }), _jsx(Box, { className: "proyecto-enlaces", children: _jsx(Button, { className: "btn btn-outline", onClick: () => {
                                                                setProyectSelected(proyecto);
                                                                setMoreInfo(true);
                                                            }, children: "M\u00E1s informaci\u00F3n" }) })] })] }, proyecto.id))) })] }) }), _jsx(Box, { component: "section", id: "contacto", className: "contacto", children: _jsxs(Container, { className: "container", children: [_jsx(Typography, { variant: "h2", className: "section-title", children: "Contacto" }), _jsx(Typography, { variant: "subtitle1", className: "section-subtitle", children: "\u00BFTienes alguna pregunta o quieres colaborar?" }), _jsxs(Box, { className: "form-group", sx: { display: "flex", flexDirection: "row", gap: 4, justifyContent: "center", paddingTop: 4 }, children: [_jsxs(Box, { sx: {
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                            }, children: [_jsx(IconButton, { children: _jsx(EmailIcon, {}) }), _jsx("label", { style: { margin: 0 }, children: "juanzateorozco@gmail.com" })] }), _jsxs(Box, { sx: {
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                            }, children: [_jsx(IconButton, { children: _jsx(PhoneIcon, {}) }), _jsx("label", { style: { margin: 0 }, children: "(+57) 314 369 5048" })] })] })] }) }), _jsx(Box, { component: "footer", className: "footer", children: _jsx(Container, { className: "container", children: _jsx(Typography, { children: "\u00A9 2024 Portafolio de Videojuegos. Todos los derechos reservados." }) }) })] }), proyectSelected && _jsx(DashboardMoreInfo, { open: moreInfo, onClose: () => setMoreInfo(false), project: proyectSelected })] }));
}
