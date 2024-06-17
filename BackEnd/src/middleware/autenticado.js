import jwt from "jsonwebtoken";
import jsonSecret from "../config/secret.js";

export const autenticado = async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).send('Access Token não informado');
    }

    try {
        const decoded = jwt.verify(token, jsonSecret.secret);
        req.userId = decoded.userId;

        return next();
    } catch (error) {
        res.status(401).send("Usuário não autenticado")
    }
}