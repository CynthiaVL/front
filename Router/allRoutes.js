import Route from "./Route.js";

//Définir ici les routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/games", "Jeux", "/pages/games.html"),
    new Route("/stores", "Magasins", "/pages/stores.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html"),
    new Route("/profil", "Informations", "/pages/auth/profil.html"),
    new Route("/order", "Panier", "/pages/auth/order.html"),

];

//Le titre s'affiche comme ceci : Route.titre = websitename
export const websiteName = "GameStore";