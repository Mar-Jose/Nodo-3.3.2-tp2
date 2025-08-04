import SuperHeroRepository from "../repository/SuperHeroRepository.mjs";

export async function obtenerSuperHeroePorId(id) {
    return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperHeroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperHeroePorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperHeroesMayoresA30() {
    return await SuperHeroRepository.obtenerMayoresA30();
}

//sprint 3:
export async function crearSuperHeroe(nuevo) {
    return await SuperHeroRepository.crearHeroe(nuevo);
}

export async function actualizarHeroe(id, valor) {
    return await SuperHeroRepository.actualizar(id, valor);
}

export async function eliminarXIdHeroe(id) {
    return await SuperHeroRepository.eliminarXId(id);
}

export async function eliminarXNombreHeroe(nombre) {
    console.log(`Estoy en la capa de servcios, función eliminarXNombre y el nombre es: ${nombre}`);
    return await SuperHeroRepository.eliminarXNombre(nombre);
}