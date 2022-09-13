// Creando el prototipo Teachers
class Teachers {
  constructor({
    id,
    name,
    age = undefined,
    country
  }) {
    this.id = id 
    this.name = name 
    this.age = age 
    this.country = country 
  }
}

// Creando instancias

const juanDC = new Teachers({
  id: 1,
  name: 'Juan David Castro',
})
const freddy = new Teachers({
  id: 2,
  name: 'Freddy Vega',
  country: 'Colombia'
})
const oscarB = new Teachers({
  id: 3,
  name: 'Oscar Barajas',
  country: 'Mexico'
})
const diegoG = new Teachers({
  id: 4,
  name: 'Diego de Granda'
})

export {
  juanDC,
  freddy,
  oscarB,
  diegoG,
}