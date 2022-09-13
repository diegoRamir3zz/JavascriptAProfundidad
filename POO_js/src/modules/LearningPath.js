import {
  computacionBasica,
  programacionBasica,
  dataScientist,
  CursoDisenoVieojuegos
} from './cursos.js'

// Creando prototipo learningPath
class LearningPath {
  constructor({
    name,
    courses = []
  }) {
    this.name = name
    this.courses = courses
  }
}

const webSchool = new LearningPath({
  name: 'Escuela de desarrollo web',
  courses: {
    computacionBasica,
    programacionBasica
  }
})
const dataSchool = new LearningPath({
  name: 'Data Science e Inteligencia Artificial',
  courses: {
    dataScientist
  }
})
const vgsSchool = new LearningPath({
  name: 'Escuela de Videojuegos',
  courses: {
    programacionBasica,
    CursoDisenoVieojuegos
  }
})

export {webSchool, dataSchool, vgsSchool}