// Creando prototipo learningPath
class LearningPath {
  constructor({
    pathName,
    path = []
  }) {
    this.pathName = pathName
    this.path = path
  }
}
const webSchool = new LearningPath({
  pathName: 'Escuela de desarrollo web',
  path: [
    'Curso de computación basica',
    'Curso de pensamiento Basico: Algoritmos y diagramas de flujo',
    'Nuevo curso de programación basica',
    'Fundamentos de ingenieria de software'
  ]
})
const dataSchool = new LearningPath({
  pathName: 'Data Science e Inteligencia Artificial',
  path: [
    'Data Scientist',
    'Data Analyst',
    'Data Engineer',
    'Machine Learning Engineer'
  ]
})
const vgsSchool = new LearningPath({
  pathName: 'Escuela de Videojuegos',
  path: [
    'Curso de introducción a la producción de videojuegos',
    'Curso de planeación y dirección de videojuegos indies',
    'Curso de creación de videojuegos',
    'Curso de Diseño de vieojuegos'
  ]
})



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
  learningPaths: webSchool
})

const pepito = new Student({
  name: 'pepito perez',
  age: 18,
  username: 'Pepe',
  email: 'pepito@pepe.com',
  learningPaths: dataSchool
})