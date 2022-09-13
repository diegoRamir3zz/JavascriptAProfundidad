import {webSchool, dataSchool, vgsSchool} from './modules/LearningPath.js'
import { computacionBasica, programacionBasica, dataScientist, CursoDisenoVieojuegos} from './modules/cursos.js'
// Creando el prototipo
class Student {
  constructor({
    name,
    age, 
    username, 
    email,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = []
  }) {
    this.name = name
    this.age = age
    this.username = username 
    this.email = email
    this.socialMedia = {
      twitter, 
      instagram, 
      facebook
    }
    this.approvedCourses = approvedCourses
    this.learningPaths = learningPaths
  }
}

// Instanciando un objeto del prototipo
const juan = new Student({
  name: 'JuanD',
  age: 20,
  username: 'diegoRamir3zz',
  email: 'Juandiego@diegoRamir3zz.com',
  learningPaths: {
    webSchool, 
    dataSchool
  }
})

const pepito = new Student({
  name: 'pepito perez',
  age: 18,
  username: 'Pepe',
  email: 'pepito@pepe.com',
  learningPaths: {
    vgsSchool
  },
  approvedCourses: {
    computacionBasica
  }
})

console.log({
  juan, 
  pepito
});