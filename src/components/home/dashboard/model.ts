export interface DashboardProjectModel {
    id: number;
    image: string;
    alt: string;
    categories: string[];
    title: string;
    description: string;
    technologies: string[];
    video: string;
    moreInfo: {
        details: string;
        challenges: string;
        learnings: string;
        systems?: MoreInfoSystemModel[];
        demo?: string;
    };
}
export interface MoreInfoSystemModel {
    name: string;
    description: string;
}