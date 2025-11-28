
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
			description: "dashboard_project_patotective_description",
			technologies: ["Unity 3D", "C#"],
			video: JumpTillTheEndVid,
			moreInfo: {
				details: "dashboard_project_patotective_details",
				challenges: "dashboard_project_patotective_challenges",
				learnings: "dashboard_project_patotective_learnings",
			}
		},
		{
			id: 1,
			image: JumpTillTheEnd,
			alt: "Jump Till The End",
			categories: ["Aventura"],
			title: "Jump Till The End",
			description: "dashboard_project_jumptilltheend_description",
			technologies: ["Unity 2D", "C#"],
			video: JumpTillTheEndVid,
			moreInfo: {
				details: "dashboard_project_jumptilltheend_details",
				challenges: "dashboard_project_jumptilltheend_challenges",
				learnings: "dashboard_project_jumptilltheend_learnings",
			}
		},
		{
			id: 2,
			image: SkylandSurvivor,
			alt: "Skyland Survivor",
			categories: ["Aventura", "Acción"],
			title: "Skyland Survivor",
			description: "dashboard_project_skylandsurvivor_description",
			technologies: ["Unity 2D", "C#"],
			video: SkylandSurvivorVid,
			moreInfo: {
				details: "dashboard_project_skylandsurvivor_details",
				challenges: "dashboard_project_skylandsurvivor_challenges",
				learnings: "dashboard_project_skylandsurvivor_learnings",
			}
		},
		{
			id: 3,
			image: EchoesOfTheAbyss,
			alt: "Echoes Of The Abyss",
			categories: ["RPG", "Acción", "Aventura"],
			title: "Echoes Of The Abyss",
			description: "dashboard_project_echoesoftheabyss_description",
			technologies: ["Unity 3D", "C#"],
			video: EchoesOfTheAbyssVid,
			moreInfo: {
				details: "dashboard_project_echoesoftheabyss_details",
				challenges: "dashboard_project_echoesoftheabyss_challenges",
				learnings: "dashboard_project_echoesoftheabyss_learnings",
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
			}
		},
	];

	const skills = [
		"dashboard_skill_1",
		"dashboard_skill_2",
		"dashboard_skill_3",
		"dashboard_skill_4",
		"dashboard_skill_5",
		"dashboard_skill_6",
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
						<Typography sx={{
							fontSize: {
								sm: "4rem",
								xs: "1.8rem"
							}
						}} className="hero-title">{t("dashboard_hero_title")}</Typography>
					</Box>
				</Box>
				<Box component="section" id="sobre-mi" className="sobre-mi">
					<Container className="container">
						<Typography sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							paddingBottom: 4,
							fontSize: {
								sm: "3rem",
								xs: "1rem"
							}
						}} className="section-title">{t("dashboard_about_me_title")}</Typography>
						<Box className="sobre-mi-content" sx={{ display: "flex", flexDirection: "column" }}>
							<Box sx={{
								display: "flex",
								flexDirection: {
									sm: "row",
									xs: "column"
								},
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
								<Typography variant="h3" sx={{ display: "flex", justifyContent: "center" }}>{t("dashboard_skills_title")}</Typography>
								<ul className="habilidades-list">
									{skills.map((skillId, index) => (
										<li key={index}>{t(skillId)}</li>
									))}
								</ul>
							</Box>
						</Box>
					</Container>
				</Box>
				<Box component="section" id="proyectos" className="proyectos">
					<Container className="container">
						<Typography className="section-title" sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							paddingBottom: 4,
							fontSize: {
								sm: "3rem",
								xs: "1rem"
							}
						}}>{t("dashboard_projects_title")}</Typography>
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
										<Typography >{t(proyecto.description)}</Typography>
										<Box className="proyecto-tecnologias">
											{proyecto.technologies.map((tec, i) => (
												<span className="tecnologia-tag" key={i}>{tec}</span>
											))}
										</Box>
										<Box className="proyecto-enlaces">
											<Button className="btn btn-outline" onClick={() => {
												setProyectSelected(proyecto);
												setMoreInfo(true);
											}}>{t("dashboard_more_info_label")}</Button>
										</Box>
									</Box>
								</Box>
							))}
						</Box>
					</Container>
				</Box>
				<Box component="section" id="contacto" className="contacto">
					<Container className="container">
						<Typography sx={{
							fontSize: {
								sm: "3rem",
								xs: "1rem"
							}
						}} className="section-title">{t("dashboard_contact_title")}</Typography>
						<Typography variant="subtitle1" className="section-subtitle">{t("dashboard_contact_subtitle")}</Typography>
						<Box className="form-group" sx={{
							display: "flex",
							flexDirection: {
								sm: "row",
								xs: "column"
							},
							gap: 4,
							justifyContent: "center",
							paddingTop: 4
						}}>
							<Box sx={{
								display: "flex",
								flexDirection: {
									sm: "row",
									xs: "column"
								},
								alignItems: "center",
							}}>
								<IconButton >
									<EmailIcon />
								</IconButton>
								<label style={{ margin: 0 }}>juanzateorozco@gmail.com</label>
							</Box>
							<Box sx={{
								display: "flex",
								flexDirection: {
									sm: "row",
									xs: "column"
								},
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