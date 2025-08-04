//importa libreria mongoose para interactuar com Mongodb
import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema
({
    nombreSuperHeroe: {type:String,required:true},
    nombreReal: {type: String, required: true},
    nombreSociedad:[String],
    edad: {type:Number, min:0},
    planetaOrigen:{type:String,default:'Desconocido'},
    debilidad:[String],
    poderes:[String],
    aliados:[String],
    enemigos:[String],
    comidaFavorita:[String],
    postrePreferido:[String],
    creador:[String],
    subidoPor:[String]
});

const superHero = mongoose.model('SuperHero',superheroSchema,'Grupo-02');

export default superHero