import { Request, Response } from "express";

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send(`Servidor A - deploy from github actions`);
});

app.listen(port, () => {
    console.log(`App escuchando en el puerto ${port} ${port === "8080" ? "from production" : "from development"}`);
});