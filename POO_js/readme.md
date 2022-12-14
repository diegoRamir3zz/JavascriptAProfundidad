##### Objetos literales

Los objetos literales en JavaScript podemos escribirlos de la siguiente manera:

```javascript
const students_rank = {
'Juan': 110,
'Nath': 700,
'Nora'; 150
} 
```
***Nota:*** Los Objetos literales no son los objetos de la programación orientada a objetos

------------

Teniendo definido lo anterior, podemos decir que JavaScript es un lenguaje orientado a objetos, pero no esta basado en clases, si no en prototipos.

lo hacemos creando una funcion de la siguiente manera:
```javascript
function Student() {
	this.name = 'Nombre'
	this.age = 18
	this.points = 750
}

const Juanita = new Student()
```
con la palabra reservada ***this*** guardamos nuestros atributos, coo el nombre la edad y los puntos.

Pero al momento de llamar a nuestra funcion, usamos la palabra reservada *** new*** .

cuando imprimimos en la consola instancias de prototipos, podriamos confundirnos porque son similares a los objetos literales. Sin embargo, podemos saber la diferencia mediante la consola. 

**Instancias de prototipo**

    // Salida de la consola.
    Student {name: 'Nombre', age: 18, points: 750}
    age: 18
    name: "Nombre"
    points: 750
    [[Prototype]]: Object
    
    // en este ejemplo la palabra Student nos indica que es una istancia del prototipo
	

**Objetos literales**

    //Imprimiendo un objeto literal en la consola
	
    {name: 'Nombre', age: 18, points: 750}
    age: 18
    name: "Nombre"
    points: 750
    [[Prototype]]: Object
	

Ahora bien, Si nos fijamos, en las instancias de prototipo, notamos que al final se nos añade la propiedad, __[[Prototype]]__ y podemos acceder a sus metodos desde un Objeto literal, o desde una Instancia del prototipo. Incluso podemos ingresar a **los metodos del prototype** de un array.

pero, ¿De donde sale el **Prototype**?
Pues bien, cuando creamos un array o un objeto literal, estamos creando una instancia del Prototipo Object (en el caso de los objetos literales), O una instancia del Prototipo Array (en el caso de los arrays).

Por esa razon nuestros objetos literales y arrays tienen tantos metodos que nosotros no hemos definido, Todos esos metodos se definieron en los prototipos Object y Array


------------

Nosotros mismos tambien podemos crear nuestros propios prototipos, como el prototipo Student del ejemplo anterior.
Y las instancias de prototipo que creamos no solo obtienen los metodos de dicho prototipo, si no tambien los metodos del prototipo Object. (Que ya esta creado por defecto en JavaScript)

Teniendo todo esto en mente, podemos decir que los objetos literales son instancias del prototipo Object

Es decir que Object (con O mayuscula) es el prototipo madre

###### Clases

Otra manera de crear prototipos es con la sintaxis de las clases.

Por ejemplo: 
```javascript
class Student2 {
  constructor({ name, age, approvedCourses = [], email,  }) {

    this.name = name
    this.age = age
    this.email = email
    this.approvedCourses = approvedCourses
  }

  addAprovedCourses(newCourse) {
    this.approvedCourses.push(newCourse)
  }
}
```
Los parametros que necesitemos recibir se los indicamos al constructor.
y por fuera del construnctor pero en el interior de la clase podemos crear nuestros metodos.

El siguiente ejemplo nos permite crear una instancia de este prototipo. 

```javascript
const carlitos = new Student2({
  name: 'Carlitos Steban', 
  age: 20, 
  email: 'Carlits@carlos.com'
})
```

##### Pilares de la programación orientada a objetos

##### 1) Abstracción
La abstracción consite en sacar los datos de un objeto para crear su prototipo. A partir de ese prototipo pudemos crear nuestras instancias.

##### Pilares de la programación orientada a objetos

##### 2) Encapsulamiento
El encapsulamiento es la manera en la que podemos guardar, proteger o limitar el acceso a nuestros prototipos u objetos.

Por ejemplo: 

```javascript
class Cursos {
  constructor({
    id,
    name,
    teacher,
    clases = []
  }) {
    this.id = id
	encapsulamiento,
    this._name = name
    this.teacher = teacher
    this.clases = clases
  }

  get name() {
    return this._name
  }

  set name(newNameOfCourse) {
    if (newNameOfCourse !== this._name) {
      console.error('No puedes modificar este campo')
    } else {
      this._name = newNameOfCourse
    }
  }

}

const computacionBasica = new Cursos({
  id: 1,
  name: 'Curso de computación basica',
  teacher: freddy
})
```
Al utilizar guión bajo de la siguiente manera:  **this._name** indicamos que queremos aplicar el encapsulamiento en dicha propiedad.

###### get = getter
La sintaxis *get* (getter) vincula una propiedad de objeto a una función que se llamará cuando se busque esa propiedad.

###### set = setter
La sintaxis *set* (setter) vincula una propiedad de objeto a una función que se llamará cuando haya un intento de establecer un nuevo valor.

##### Modulos ES6
Cuando convertimos un script en un modulo lo que hacemos es 'ocultar' el contenido importante, exepto aquello que estamos importando.

Indicamos un modulo de la siguiente manera

```javascript
<script type="module" src="./index.js"></script>
```
Ademas en el documento ./index.js exportamos de la siguiente manera
por ejemplo.

```javascript
function videoPlay(id) {
  const urlSecreta = `https://urlquedesamosoucltar.com${id}`
  console.log('Se esta pausando el video')
}
function videoStop(id) {
  const urlSecreta = `https://urlquedesamosoucltar.com${id}`
  console.log('Pausando el video')
}
class PlatziClass {
  constructor({
    name,
    videoID
  }) {
    this.name = name
    this.videoID = videoID
  }

  reproducir() {
    videoPlay(this.videoID)
  }

  pausa() {
    videoStop(this.videoID)
  }
}

export { PlatziClass }
```

Al hacer esto indicamos que solo lo que estamos exportando con la palabra reservada **export** sera accesible por los usuarios.

##### 3) Herencia
Utilizamos la herencia cuando varios objetos comparten propiedades, sin embargo su logica es diferente.

Lo que hacemos es crear una superClase que contenga todos las propiedades que necesitamos, y luego cremos las subClases.

para indicarle a la subclase que debe heredar las propiedades de su clase madre utilizamos la palabra reservada extends y luego le indicamos cual es la clase madre, es decir de que clase queremos heredar las propiedades.

ejemplo: 

**Clase Madre o Super Clase**

```javascript
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
```
**Sub Clases**

```javascript
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
```
A la Sub Clase le pasamos la propiedades de la Super Clase mediante el constructor y ademas de utilizar el metodo super. Como se muestra en el ejemplo anterior

##### 4) Polimorfismo

El polimorfismo permite que las subclases tengan métodos con el mismo nombre que los de sus superclases pero con diferentes implementaciones.

Por ejemplo, si heredamos del Prototipo madre el siguiente metodo:

**Nota**: En Comments no estamos declarando la propiedad studentRole porque por defecto esta en "Student"

```javascript
addComment(CommentContent) {
    const comment = new Comments({
      content: CommentContent,
      studentName: this.name
    })
    comment.publicar()
  }
```
El polimorfismo nos permite cambiar algunos valores desde un prototipo hijo (subclase)

Por ejemplo, podemos cambiar el valor de studentRole. Por defecto es 'Estudent' pero al cambiarlo ahora queda como 'Teacher'

Por ejemplo: 
```javascript
class TeacherStudent extends Student {
  constructor(props) {
    super(props)
  }
  approvedCourse(newCourse) {
      this.approvedCourses.push(newCourse)
  }
 
  addComment(CommentContent) {
    const comment = new Comments({
      content: CommentContent,
      studentName: this.name,
      studentRole: 'Teacher' 
    })
    comment.publicar()
  }
  
}
```

