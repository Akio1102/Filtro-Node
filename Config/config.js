import "dotenv/config"
import express from "express";
import morgan from "morgan";
import cors from "cors";


export const Config={
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL
}

export function Global(app) {
    app.use(morgan("dev")),
    app.use(cors()),
    app.use(express.json())
}