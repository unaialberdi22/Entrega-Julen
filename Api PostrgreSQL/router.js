import router from "express";
import {getAlign, getAllCoordinates, getLevel, getKilometer} from "./Controllers/controller.js";
const Router = router();
Router.get("/Coordenadas", getAllCoordinates)
Router.get("/Niveles/:lineName", getLevel)
Router.get("/Alineacion/:lineName", getAlign)
Router.get("/Kilometro", getKilometer)
export default Router;