//Sprint 3. tp2.

import { body, validationResult } from 'express-validator';

export const validationDataSuperHeroes = [
  
  // Requerimiento 1:
  body('nombreSuperHeroe')
    .trim() 
    .notEmpty().withMessage('El nombre del superhéroe es requerido.') 
    .isLength({ min: 3 }).withMessage('El nombre del superhéroe debe tener al menos 3 caracteres.') 
    .isLength({ max: 60 }).withMessage('El nombre del superhéroe no puede exceder los 60 caracteres.'), 
    
  // Requerimiento 2:
  body('nombreReal')
    .trim() 
    .notEmpty().withMessage('El nombre real es requerido.') 
    .isLength({ min: 3 }).withMessage('El nombre real debe tener al menos 3 caracteres.') 
    .isLength({ max: 60 }).withMessage('El nombre real no puede exceder los 60 caracteres.'), 

  // Requerimiento 3:
  body('edad')
    .trim() 
    .notEmpty().withMessage('La edad es requerida.') 
    .isInt({ min: 0 }).withMessage('La edad debe ser un número entero no negativo.'), 

  // Requerimiento 4:
  body('poderes')
    .notEmpty().withMessage('Los poderes son requeridos y no pueden estar vacíos.') 
    .isArray().withMessage('Los poderes deben ser un array.') 
    .custom(value => value.length > 0).withMessage('El array de poderes no puede estar vacío.') 
    .custom(value => {
      for (let poder of value) {
        if (typeof poder !== 'string' || poder.trim().length < 3 || poder.trim().length > 60) {
          throw new Error('Cada poder debe ser un string entre 3 y 60 caracteres.');
        }
      }
      return true; 
    }),
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};