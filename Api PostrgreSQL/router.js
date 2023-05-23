import router from "express";
import {getAllCoordinates, getData, getKilometer} from "./Controllers/controller.js";
const Router = router();
Router.get("/Coordenadas", getAllCoordinates)
Router.get("/Datos/:dataType/:lineName", getData)
Router.get("/Kilometro", getKilometer)
export default Router;