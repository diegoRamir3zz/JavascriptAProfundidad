## Profundicemos en los objetos

#### Static: atributos y metodos estaticos

Para acceder a los metodos o atibutos de un prototipo, no necesariamente tenemos que crear una instancia de dicho prototipo. Es decir un objeto. 

Ya que podemos acceder a ellos utilizando atributos estaticos.

Lo hacemos de la siguiente manera.

```javascript
class Patito {
	static sonidito = 'cuack!'
}

console.log(Patito.sonidito)
// cuack!
```

En este ejemplo, estamos creando un atributo sonidito en el prototipo Patito, y sin necesidad de crear una instancia podemos acceder al atributo sonidito como se ven en el **Console.log(Patito.sonidito)** 

**NOTA:** Funciona de la misma manera con los metodos.
  
 Ejemplo: 
 
```javascript
class Patito {
	static hacerSonidito() {
		return "cuack!"
	}
}

console.log(Patito.hacerSonidito())
// cuack!
```
Teniendo eso presente, veamos los metodos estaticos del Prototipo madre *Object*

#### .keys
El metodo estatico keys nos devuelve una lista de arrays de las llaves de nuestro objeto.

```javascript
const jugador = {
	name: "Will",
	email: "will@email.com",
	age: 18
}

Object.keys(jugador)
// ["name", "email", "age"]
```
#### .getOwnPropertyNames

Este metodo estatico hace casi lo mismo que el metodo *keys*.
En breve analizaremos la diferencia.

#### .entries

El metodo .entries nos devuelve un array de arrays.

Ejemplo: 

```javascript
const jugador = {
	name: 'Will',
	age: 20
}

Object.entries(jugador)

/* 
[
	0: ["name", "Will"]
	1: ["age", 20]
]
*/
```

#### .getOwnPropertyDescriptors

Este metodo nos devuelve todas las propiedades de nuestro objeto. Pero si observamos una de sus propiedades se veria de la siguiente manera

```javascript
const jugador = {
	name: "Will"
}

console.log(Object.getOwnPropertyDescriptors(jugador))

/*
name: {
	value: "Will",
	writable: true,
	configurable: true,
	enumerable: true
} 
*/
```
Cuando nos consentramos en el encapsulamiento (Que es uno de los pilares de la programación orientada a objetos) estos metodos nos seran muy utiles para limitar quien puede modificar o eliminar nuestros objetos.