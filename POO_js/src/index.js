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

class FreeStudent extends Student {
  constructor(props) {
    super(props)
  }
  approvedCourse(newCourse) {
    if(newCourse.isFree) {
      this.approvedCourses.push(newCourse)
    } else {
      console.warn(`Lo sentimos, ${this.name}, solo puedes tomar cursos free`)
    }
  }
}
class BasicStudent extends Student {
  constructor(props) {
    super(props)
  }
  approvedCourse(newCourse) {
    if(newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse)
    } else {
      console.warn(`Lo sentimos, ${this.name}, no puedes tomar cursos en ingles`)
    }
  }
}
class ExpertStudent extends Student {
  constructor(props) {
    super(props)
  }
  approvedCourse(newCourse) {
      this.approvedCourses.push(newCourse)
  }
}

// Instanciando un objeto del prototipo
const juan = new FreeStudent({
  name: 'Juan Diego',
  age: 20,
  username: 'diegoRamir3zz',
  email: 'Juandiego@diegoRamir3zz.com',
  learningPaths: {
    webSchool, 
    dataSchool
  }
})

const pepito = new BasicStudent({
  name: 'pepito perez',
  age: 18,
  username: 'Pepe',
  email: 'pepito@pepe.com',
  learningPaths: {
    vgsSchool
  }
})

console.log({
  juan, 
  pepito
});