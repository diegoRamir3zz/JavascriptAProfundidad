// Objeto literal
const juan = {
  name: "Juanito",
  age: 20,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log('This', this)
    console.log('This.approvedCourses', this.approvedCourses)
    this.approvedCourses.push(newCourse)
  }
}


//enties: devuelve un array de arrays
// console.log(Object.entries(juan))

// Intentemos acceder al metodo addCourse y añadir un curso.
// Llegamos a la funcion ¿Cómo la llamamos?

// console.log(Object.entries(juan)[3][1])
// console.log(Object.entries(juan)[3][1]('Curso 2')) // devuelve un error de undefined.

// Si revisamos el scope. nos daremos cuenta de que this, ya no hace referencia al objeto juan.
// Y para poder poder añadir el curso, utilizamos el siguiente codigo.

// console.log(Object.entries(juan)[3][1].bind(juan)("curso 2"));

const jugador = {
  name: "andrea",
  age: 20,
  correo: "Andres@mail.com" 
}