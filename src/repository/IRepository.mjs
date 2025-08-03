class IRepository {
    //creo interfaz CRUD.
    obtenerPorId(id)
    {
        throw new Error ("Metodo 'obtenerPorId()' no implementado");
    }
    obtenerTodos()
    {
        throw new Error ("Metodo 'obtenerTodos()' no implementado");
    }
    buscarPorAtributo(atributo,valor)
    {
        throw new Error ("Metodo 'buscarPorAtributo()' no implementado");
    }
     obtenerMayoresDe30()
    {
        throw new Error ("Metodo 'obtenerMayoresDe30()' no implementado");
    }
    //sprint 3:
    crearHeroe(nuevo)
     {
        throw new Error ("Metodo 'crear()' no implementado");
    }
    actualizar(id,valor)
    {
        throw new Error ("Metodo 'actualizar()' no implementado");
    }
    eliminarXId(id)
    {
        throw new Error ("Metodo 'eliminarXId()' no implementado");
    }
     eliminarXNombre(nombre)
    {
        throw new Error ("Metodo 'eliminarXNombre()' no implementado");
    } 
}

export default IRepository;