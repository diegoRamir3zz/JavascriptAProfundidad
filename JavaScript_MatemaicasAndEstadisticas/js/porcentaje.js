const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')
const btn = document.querySelector('button')

btn.addEventListener('click', e => {
  e.preventDefault()
  
  const price = parseInt(inputPrice.value)
  const discount = parseInt(inputDiscount.value)

  const total = (price * (100 - discount)) / 100
  
  showResults(total)
})

function showResults(total) {
  const div = document.querySelector('.results')

  div.removeChild(div.firstChild)

  const p = document.createElement('p')
  p.innerText = total
  
  div.appendChild(p)
}