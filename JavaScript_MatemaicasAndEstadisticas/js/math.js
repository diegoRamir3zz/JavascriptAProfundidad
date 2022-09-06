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
function calcularTriangulo(lado1, lado2, base, altura) {
  console.log({
    perimetro: `El perimetro es de ${lado1 + lado2 + base}cm`, 
    area: `El area es de ${(base * altura) / 2}cm cuadrados`
  });
}
calcularTriangulo(6, 6, 4, 5.5)
console.groupEnd('triangulo')