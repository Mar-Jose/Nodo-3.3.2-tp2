import { obtenerSuperHeroePorId, obtenerTodosLosSuperHeroes, buscarSuperHeroePorAtributo, obtenerSuperHeroesMayoresA30, crearSuperHeroe, actualizarHeroe, eliminarXIdHeroe, eliminarXNombreHeroe } from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';
         
export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperHeroePorId(id);
        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        return res.status(200).json(superheroeFormateado);
    } catch (error) {
        return res.status(500).send ({ mensaje: 'Error al obtener el superhéroe', error: error.message });
    }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperHeroes();
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        return res.status(200).json(superheroesFormateados);
    } catch (error) {
        return res.status(500).send({ mensaje: 'Error al obtener los superhéroes', error: error.message });
    }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperHeroePorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes con ese atributo' });
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
            return res.status(200).json(superheroesFormateados);
    } catch (error) {
            return res.status(500).send({ mensaje: 'Error al buscar los superhéroes', error: error.message });
    }
}
export async function obtenerSuperHeroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperHeroesMayoresA30();
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes mayores de 30 años' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
            return res.status(500).send({mensaje: 'Error al obtener superhéroes mayores de 30', error: error.message});
    }
}

    export async function actualizarController(req, res) {
    try {
        const { id } = req.params;
        const datoActualizado = req.body;
        const superheroesActualizados = await actualizarHeroe(id, datoActualizado);
        console.log(superheroesActualizados);
        if (!superheroesActualizados) {
            return res.status(404).send({ mensaje: 'No se encontraron el superhéroes' });
        }

        const superheroesActualizadosFormateados = renderizarSuperheroe(superheroesActualizados);
            return res.status(200).json(superheroesActualizadosFormateados);
    } catch (error) {
             return res.status(500).send({ mensaje: 'Error al actualizar el superhéroe', error: error.message,});
    }
}


export async function crearHeroeController(req, res) {
  try {
    const nuevoSuperheroe = req.body;
    const superheroeCreado = await crearSuperHeroe(nuevoSuperheroe);
    
    const superheroeFormateado = renderizarSuperheroe(superheroeCreado);
        return res.status(201).json(superheroeFormateado);
  } catch (error) {
        return res.status(500).send({ mensaje: "Error al crear el superhéroe", error: error.message });
  }
}
    export async function eliminarXIdController(req, res) {
    const { id } = req.params;
    try {
        const superheroes = await eliminarXIdHeroe(id);
        if (!superheroes) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes con ese dato proporcionado para su eliminación' });
        }

        const superheroesFormateados = renderizarSuperheroe(superheroes);
       return res.status(200).json(superheroesFormateados);
    } catch (error) {
        return res.status(500).send({ mensaje: 'Error al buscar los superhéroes', error: error.message });
    }
}

 export async function eliminarXNombreController(req, res) {
    try {
        const { nombre } = req.params;
       /*console.log (req);
       */
        console.log (`estoy en la capa Controllers, función eliminar x nombre, nombre :${nombre}`);
        const superheroesEliminado = await eliminarXNombreHeroe(nombre);
      //  console.log(`nombre: ${superheroesEliminado} del superheroesEliminado`);
        if (superheroesEliminado === null) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes con el nombre proporcionado' });
        }
        const superheroesFormateados = renderizarSuperheroe(superheroesEliminado);
        return res.status(200).json({ mensaje: 'Usted elimino el superhéroe "${nombre}"con éxito', superheroe: superheroesFormateados});
    } catch (error) {
       return res.status(500).send({ mensaje: 'Error al buscar los superhéroes', error: error.message });
    }
}
