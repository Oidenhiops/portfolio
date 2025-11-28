import type { DashboardProjectModel } from '@components/home/dashboard/model';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectMoreInfoProps {
    open: boolean;
    onClose: () => void;
    project: DashboardProjectModel;
}

const DashboardMoreInfo: React.FC<ProjectMoreInfoProps> = ({ open, onClose, project }) => {
    const { t } = useTranslation();
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box component="video" src={project.video} controls style={{ width: '100%', borderRadius: 12 }} />
                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {project.moreInfo.details && (
                            <Typography variant="subtitle2">{t("dashboard_more_info_details_title")}
                                <Typography variant="body2" color="text.secondary">{t(project.moreInfo.details)}</Typography>
                            </Typography>
                        )}
                        {project.moreInfo.challenges && (
                            <Typography variant="subtitle2">{t("dashboard_more_info_challenges_title")}
                                <Typography variant="body2" color="text.secondary">{t(project.moreInfo.challenges)}</Typography>
                            </Typography>
                        )}
                        {project.moreInfo.learnings && (
                            <Typography variant="subtitle2">{t("dashboard_more_info_learnings_title")}
                                <Typography variant="body2" color="text.secondary">{t(project.moreInfo.learnings)}</Typography>
                            </Typography>
                        )}
                        {project.moreInfo.demo && (
                            <Typography variant="subtitle2">
                                <b>Demo:</b> <a href={project.moreInfo.demo} target="_blank" rel="noopener noreferrer">{project.moreInfo.demo}</a>
                            </Typography>
                        )}
                    </Box>
                    {project.moreInfo.systems &&
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle2">Sistemas y Herramientas:</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                {project.moreInfo.systems.map((sys, idx) => (
                                    <Box key={idx} sx={{ border: '1px solid #00f3ff', borderRadius: 2, p: 1, bgcolor: 'background.paper' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>{sys.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">{sys.description}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    }
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2">{t("dashboard_more_info_tecnologies_title")}</Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {project.technologies.map((tec, i) => (
                                <Box key={i} sx={{ px: 1, py: 0.5, bgcolor: 'primary.light', borderRadius: 1, color: 'primary.contrastText', fontSize: 14 }}>{tec}</Box>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2">{t("dashboard_more_info_categories_title")}</Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {project.categories.map((cat, i) => (
                                <Box key={i} sx={{ px: 1, py: 0.5, bgcolor: 'secondary.light', borderRadius: 1, color: 'secondary.contrastText', fontSize: 14 }}>{cat}</Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary" variant="contained">{t("dashboard_more_info_close_button")}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DashboardMoreInfo;