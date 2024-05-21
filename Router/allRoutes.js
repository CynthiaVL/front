import Route from "./Route.js";

//Définir ici les routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/games", "Tous les jeux", "/pages/games.html"),
    new Route("/stores", "Nos magasins", "/pages/stores.html"),
];

//Le titre s'affiche comme ceci : Route.titre = websitename
export const websiteName = "GameStore";