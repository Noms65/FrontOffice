import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";


export const sidebarMenu = [
    {
        title: 'Liste Annonces',
        icon: HomeOutlinedIcon,
        path: '/',
    },
    {
        title: 'Menu Info',
        tag: 'divider'
    },
    {
        title: 'Mes Message',
        icon: ReceiptOutlinedIcon,
        path: '/ContentMessage',
    },
    {
        title: 'Fiche Voiture',
        icon: ReceiptOutlinedIcon,
        path: '/FicheVoiture',
    },
    {
        title: 'Mes Annonces',
        icon: ReceiptOutlinedIcon,
        path: '/MesAnnonces',
    },
    {
        title: "Annonces en favoris",
        icon: TimelineOutlinedIcon,
        path: '/AnnonceFavori',
    },
    {
        title: "Historique Annonces",
        icon: TimelineOutlinedIcon,
        path: '/MesAnnonce',
    },
    {
        title: 'Connecter pour avoir beaucoup des fonctionnalite',
        tag: 'divider'
    },
    {
        title: "Login",
        icon: PeopleOutlinedIcon,
        path: '/Login',
    },
];