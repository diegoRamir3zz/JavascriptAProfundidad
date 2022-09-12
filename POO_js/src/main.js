//Este es un objeto literal
const person = {
  // PROPIEDADES
  name: 'Juan',
  lastName: 'Ramírez',
  age: 20,
  approvedCourses: [
    'Curso definitivo de HTML y CSS',
    'Curso Practico de HTML y CSS',
    'Curso Practico de JavaScript',
  ],
  // METODOS
  //Podemos crear metodos de la siguiente manera.
  addAprovedCourses(newCourse) {
    //con this accedemos a las propiedades del mismo objeto y en este caso hacemos uso del metodo .push
    this.approvedCourses.push(newCourse)
  }
}

// Creando un prototipo
function Student(name, age, approvedCourses) {
  this.name = name
  this.age = age
  this.approvedCourses = approvedCourses
}
//Creando metodos para el prototipo Student
Student.prototype.addAprovedCourses = function(newCourse) {
  this.approvedCourses.push(newCourse)
}

// Creando instancia del protoripo Student
const Natalia = new Student(
  'Natalia',
  20,
  [
    'Curso definitivo de HTML y CSS',
    'Curso Practico de HTML y CSS'
  ]
)