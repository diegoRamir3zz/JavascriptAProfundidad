const btn = document.querySelector('button')

btn.addEventListener('click', e => {
  e.preventDefault()
  const inputDiscount = document.querySelector('#discount').value
  const inputPrice = document.querySelector('#price').value

  if(inputPrice === '' || inputDiscount === '') {
    showResults('Revisa que los campos esten llenos')
  } else if (inputDiscount > 100){
    showResults('Aja, Verifica que el campo sea correcto')
  } else {
    const price = parseInt(inputPrice)
    const discount = parseInt(inputDiscount)

    const total = (price * (100 - discount)) / 100

    showResults(`$${total}`)
  }
})

function showResults(total) {
  const div = document.querySelector('.results')

  div.removeChild(div.firstChild)

  const p = document.createElement('p')
  p.innerText =  total
  
  div.appendChild(p)
}