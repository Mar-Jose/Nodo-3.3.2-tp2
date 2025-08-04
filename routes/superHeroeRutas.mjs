import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperHeroesMayoresDe30Controller,
    crearHeroeController,
    actualizarController,
    eliminarXIdController,
    eliminarXNombreController,
    
} from '../controllers/superheroesController.mjs';
// Sprint 3.tp2.
import { 
        validationDataSuperHeroes,  
        handleValidationErrors 
    } from '../middleware/validationRules.mjs';


const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/mayores-30', obtenerSuperHeroesMayoresDe30Controller);
router.post('/heroes', crearHeroeController);
router.put('/heroes/id/:id', actualizarController);
// sprint 3 tp 2.
router.post('/heroes/agregar', validationDataSuperHeroes, handleValidationErrors, crearHeroeController);
router.put('/heroes/editar/:id', validationDataSuperHeroes, handleValidationErrors, actualizarController);

//sprint 3.1
router.delete('/heroes/id/:id', eliminarXIdController);
router.delete('/heroes/Nombre/:nombre', eliminarXNombreController);

export default router;
