const btn = document.querySelector('button')

const cupons = [
  {
    title: 'Di3go50',
    discount: 50
  },
  {
    title: 'Platzi60',
    discount: 60
  },
  {
    title: 'Apr3nde30',
    discount: 30
  }
]


btn.addEventListener('click', e => {
  e.preventDefault()
  const inputCupon = document.querySelector('#cupon').value
  const inputPrice = document.querySelector('#price').value
  const cuponDiscount = cupons.find( cupon => cupon.title === inputCupon)

  if(inputPrice === '') {
    showResults('Ingresa un precio valido')
  } else if (inputCupon === '') {
    showResults(`$${inputPrice}`)
  } else if (!!cuponDiscount) {
    const price = parseInt(inputPrice)
    const cupon = cuponDiscount.discount
    const total = (price * (100 - cupon)) / 100
    showResults(`$${total}`)
  } else {
    showResults('Ingresa un cupon valido')
  }
})

function showResults(total) {
  const div = document.querySelector('.results')

  div.removeChild(div.firstChild)

  const p = document.createElement('p')
  p.innerText =  total
  
  div.appendChild(p)
}