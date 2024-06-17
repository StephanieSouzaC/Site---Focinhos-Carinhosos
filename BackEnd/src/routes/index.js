import express from 'express';
import path from 'path';
import Animais from './animaisRoutes.js';
import Funcionarios from './funcionariosRoutes.js';
import { login } from '../controllers/userController.js';

const routes = (app) => {

    app.use('/static', express.static(path.resolve('../frontend/static')));

    app.route('/').get((req, res) => {
        res.status(200).sendFile(path.resolve('../frontend/HomePage.html'));
    });
    app.route('/HomePage.html').get((req, res) => {
        res.status(200).sendFile(path.resolve('../frontend/HomePage.html'));
    });
    app.route('/Adocao.html').get((req, res) => {
        res.status(200).sendFile(path.resolve('../frontend/Adocao.html'));
    });
    app.route('/AdminHomePage.html').get((req, res) => {
        res.status(200).sendFile(path.resolve('../frontend/AdminHomePage.html'));
    });
    app.route('/AdminLoginPage.html').get((req, res) => {
        res.status(200).sendFile(path.resolve('../frontend/AdminLoginPage.html'));
    });
    app.route('/BusAnimais.html').get((req, res) => {
        res.status(200).sendFile(path.resolve('../frontend/BusAnimais.html'));
    });
    app.route('/BusFuncionarios.html').get((req, res) => {
        res.status(200).sendFile(path.resolve('../frontend/BusFuncionarios.html'));
    });
    app.route('/CadAnimais.html').get((req, res) => {
        res.status(200).sendFile(path.resolve('../frontend/CadAnimais.html'));
    });
    app.route('/CadFuncionarios.html').get((req, res) => {
        res.status(200).sendFile(path.resolve('../frontend/CadFuncionarios.html'));
    });
    app.use(express.json(), Animais, Funcionarios);
};

export default routes;
