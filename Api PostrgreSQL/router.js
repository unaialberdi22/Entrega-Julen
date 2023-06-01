import router from "express";
import {getAllCoordinates, getData, getKilometer} from "./Controllers/controller.js";
const Router = router();
Router.get("/Coordenadas", getAllCoordinates)
Router.get("/Datos/:dataType/:lineName/:KM1/:KM2/:fecha/:via", getData)
Router.get("/Kilometro/:fecha", getKilometer)
export default Router;