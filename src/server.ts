import { Request, Response } from "express";

const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send(`Server up from ${port} | fecha actual: ${new Date().toLocaleDateString()}`);
});

app.post('/name', (req: Request, res: Response) => {
    const name = req.body.name;
    res.json({ message: `El nombre tiene ${name.length} caracteres` });
});

app.listen(port, () => {
    console.log(`App escuchando en el puerto ${port} ${port === "8080" ? "from production" : "from development"}`);
});