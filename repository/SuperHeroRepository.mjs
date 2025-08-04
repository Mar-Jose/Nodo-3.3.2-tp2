//Implementa acceso real a mongoDB

import superHero from "../models/superHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await superHero.findById(id);
    }

    async obtenerTodos() {
        return await superHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        return await superHero.find({ [atributo]: valor });
    }
     async obtenerMayoresA30() {
        return await SuperHero.find({ edad: { $gt: 30 }, planetaOrigen:"Tierra", $expr: {$gt:[{$size: "$poderes"}, 1]}});
    }
    
// sprint 3:
    async crearHeroe(nuevo) {
        const nuevoHeroe= superHero(nuevo);
        return await nuevoHeroe.save();  
    }

    async actualizar(id,valor) {
        return await superHero.findByIdAndUpdate(id, valor, {new: true});  
    }

   async eliminarXId(id) {
    return await superHero.findByIdAndDelete(id);
   }

    async eliminarXNombre(nombre) {
    return await superHero.findOneAndDelete({ nombreSuperHeroe: nombre });
    }
}
export default new SuperHeroRepository;
