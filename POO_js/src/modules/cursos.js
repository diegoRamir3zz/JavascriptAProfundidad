import {
  juanDC,
  oscarB,
  freddy,
  diegoG
} from './teachers.js'

// Creando el prototipo Cursos
class Cursos {
  constructor({
    id,
    name,
    teacher,
    clases = []

  }) {
    this.id = id
    this.name = name
    this.teacher = teacher
    this.clases = clases
  }
}

// Creando instancias

const computacionBasica = new Cursos({
  id: 1,
  name: 'Curso de computación basica',
  teacher: freddy
})

const programacionBasica = new Cursos({
  id: 2,
  name: 'Nuevo curso de programación basica',
  teacher: {
    freddy,
    diegoG,
    juanDC
  },
})
const dataScientist = new Cursos({
  id: 3,
  name: 'Data Scientist',
  teacher: oscarB,
})

const CursoDisenoVieojuegos = new Cursos({
  id: 4,
  name: 'Curso de Diseño de vieojuegos',
  teacher: juanDC,
})

export {
  computacionBasica,
  programacionBasica,
  dataScientist,
  CursoDisenoVieojuegos
}