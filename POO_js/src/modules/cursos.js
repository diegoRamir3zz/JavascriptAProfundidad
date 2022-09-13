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
    // Utilizamos por convención el guión bajo, para indicar que estamos usando el encapsulamiento,
    this._name = name
    this.teacher = teacher
    this.clases = clases
  }

  get name() {
    //La sintaxis get (getter) vincula una propiedad de objeto a una función que se llamará cuando se busque esa propiedad.
    return this._name
  }

    // La sintaxis set (setter) vincula una propiedad de objeto a una función que se llamará cuando haya un intento de establecer un nuevo valor.
  set name(newNameOfCourse) {
    if (newNameOfCourse !== this._name) {
      console.error('No puedes modificar este campo')
    } else {
      this._name = newNameOfCourse
    }
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