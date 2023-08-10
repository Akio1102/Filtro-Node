import express from "express";
import { Config,Global } from "./Config/config.js";
import ConectDB from "./Database/Conection.js";
import RoutesALL from "./Routes/Routes.js";

export default class{
    constructor(){
        this.app = express()
        this.port = Config.PORT
        this.MongoDB()
        this.middlewares = Global(this.app)
        this.Routes()
    }

    async MongoDB(){
        await ConectDB(Config.MONGO_URL)
    }

    Routes(){
        this.app.use(RoutesALL)
    }

    start(){
        this.app.listen(this.port,()=>{
            console.clear()
            console.log(`Server Runing on PORT ${this.port}`);
        })
    }
}