
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
import type { DashboardProjectModel } from '@components/home/dashboard/model';
import './dashboard.css';
export default function Dashboard() {
	const { t } = useTranslation();
	const proyects: DashboardProjectModel[] = [
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
	]
	const [showGifIdx, setShowGifIdx] = React.useState<number | null>(null);
	const [moreInfo, setMoreInfo] = useState(false);
	const hoverTimeout = React.useRef<NodeJS.Timeout | null>(null);
	const [proyectSelected, setProyectSelected] = useState<DashboardProjectModel | null>(null);
	const handleMouseEnter = (idx: number) => {
		hoverTimeout.current = setTimeout(() => setShowGifIdx(idx), 600);
	};
	const handleMouseLeave = () => {
		if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
		setShowGifIdx(null);
	};

	return (
		<Box sx={{ overflowX: "hidden" }}>
			<Box>
				<Box component="section" id="inicio" className="hero">
					<Box className="hero-content">
						<Typography variant="h2" className="hero-title">{t("dashboard_hero_title")}</Typography>
					</Box>
				</Box>
				<Box component="section" id="sobre-mi" className="sobre-mi">
					<Container className="container">
						<Typography variant="h2" className="section-title">Sobre Mí</Typography>
						<Box className="sobre-mi-content" sx={{ display: "flex", flexDirection: "column" }}>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								gap: 4,
							}}>
								<Box className="sobre-mi-texto">
									<Typography>{t("dashboard_about_me_text")}</Typography>
								</Box>
								<Box
									component="img"
									src={Profile}
									alt="Profile"
									sx={{
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
									}}
								/>
							</Box>
							<Box className="sobre-mi-habilidades" sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
								<Typography variant="h3" sx={{ display: "flex", justifyContent: "center" }}>Habilidades</Typography>
								<ul className="habilidades-list">
									{skills.map((skill, index) => (
										<li key={index}>{skill}</li>
									))}
								</ul>
							</Box>
						</Box>
					</Container>
				</Box>
				<Box component="section" id="proyectos" className="proyectos">
					<Container className="container">
						<Typography variant="h2" className="section-title" sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: 4 }}>Mis Proyectos</Typography>
						<Box sx={{
							display: "flex",
							flexWrap: "wrap",
							gap: "20px",
							justifyContent: "center"
						}}>
							{proyects.map((proyecto) => (
								<Box
									component="article"
									className="proyecto-card"
									key={proyecto.id}
									sx={{ width: "350px !important" }}
									onMouseEnter={() => handleMouseEnter(proyecto.id)}
									onMouseLeave={handleMouseLeave}
								>
									<Box className="proyecto-imagen" sx={{ position: "relative" }}>
										<img src={proyecto.image} alt={proyecto.alt} className="proyecto-img" />
										{showGifIdx === proyecto.id && proyecto.video && (
											<Box
												component="video"
												src={proyecto.video}
												autoPlay
												loop
												muted
												playsInline
												sx={{
													position: "absolute",
													top: 0,
													left: 0,
													width: "100%",
													height: "100%",
													objectFit: "cover",
													zIndex: 2,
													borderRadius: "inherit"
												}}
											/>
										)}
										<Box className="proyecto-overlay">
											{proyecto.categories.map((cat, i) => (
												<span className="proyecto-categoria" key={i}>{cat}</span>
											))}
										</Box>
									</Box>
									<Box className="proyecto-info" sx={{
										display: "flex",
										flexDirection: "column",
										gap: 2
									}}>
										<Typography variant="h4" className="proyecto-titulo">{proyecto.title}</Typography>
										<Typography >{proyecto.description}</Typography>
										<Box className="proyecto-tecnologias">
											{proyecto.technologies.map((tec, i) => (
												<span className="tecnologia-tag" key={i}>{tec}</span>
											))}
										</Box>
										<Box className="proyecto-enlaces">
											<Button className="btn btn-outline" onClick={() => {
												setProyectSelected(proyecto);
												setMoreInfo(true);
											}}>Más información</Button>
										</Box>
									</Box>
								</Box>
							))}
						</Box>
					</Container>
				</Box>
				<Box component="section" id="contacto" className="contacto">
					<Container className="container">
						<Typography variant="h2" className="section-title">Contacto</Typography>
						<Typography variant="subtitle1" className="section-subtitle">¿Tienes alguna pregunta o quieres colaborar?</Typography>
						<Box className="form-group" sx={{ display: "flex", flexDirection: "row", gap: 4, justifyContent: "center", paddingTop: 4 }}>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}>
								<IconButton >
									<EmailIcon />
								</IconButton>
								<label style={{ margin: 0 }}>juanzateorozco@gmail.com</label>
							</Box>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}>
								<IconButton >
									<PhoneIcon />
								</IconButton>
								<label style={{ margin: 0 }}>(+57) 314 369 5048</label>
							</Box>
						</Box>
					</Container>
				</Box>
				<Box component="footer" className="footer">
					<Container className="container">
						<Typography>&copy; 2024 Portafolio de Videojuegos. Todos los derechos reservados.</Typography>
					</Container>
				</Box>
			</Box>
			{proyectSelected && <DashboardMoreInfo open={moreInfo} onClose={() => setMoreInfo(false)} project={proyectSelected!} />}
		</Box>
	);
}