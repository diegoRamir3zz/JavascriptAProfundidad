// Calculando medidas del cuadrado
console.group('Cuadrado')
function calcularCuadrado(lado) {
  console.log({
    perimetro: `El perimetro es de ${lado * 4}cm`, 
    area: `El area es de ${lado * lado}cm cuadrados`
  });
}
calcularCuadrado(5)
console.groupEnd('Cuadrado')

// Calculando medidas del triangulo
console.group('triangulo')

function calcularAlturaTriangulo(lados, base) {
  if(lados == base) {
    console.warn('Este no es un triangulo isosceles')
  } else {
    // h = raizCuadrada(lados **2 - (base**2) / 4 )
    // Math.sqrt es la raiz cuadrada
    console.log(Math.sqrt( (lados ** 2 ) - (base**2) / 4 ))
  }
}
calcularAlturaTriangulo(6, 4)

function calcularTriangulo(lado1, lado2, base, altura) {
  console.log({
    perimetro: `El perimetro es de ${lado1 + lado2 + base}cm`, 
    area: `El area es de ${(base * altura) / 2}cm cuadrados`
  });
}
calcularTriangulo(6, 6, 4, 5.5)
console.groupEnd('triangulo')

// Calculado medidas del circulo
console.group('circulo')
function calcularCirculo(radio) {
  const diametro = radio * 2
  const radioAlCuadrado = Math.pow(radio, 2) //De esta manera elevamos a radio al cuadrado
  const PI = Math.PI
  console.log({
    circunferencia: `La circunferencia es ${diametro * PI}`,
    area: `El area es ${radioAlCuadrado * PI}`
  });
}
calcularCirculo(3)
console.groupEnd('circulo')