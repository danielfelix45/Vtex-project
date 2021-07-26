const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let address = document.getElementById('address').value;
  let city = document.getElementById('city').value;
  let cpf = document.getElementById('cpf').value;
  let date = document.getElementById('date').value;
  let email = document.getElementById('email').value;
  let tel = document.getElementById('tel').value;
  let data = {
    name,
    address,
    city,
    cpf,
    date,
    email,
    tel
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

})

function addProd() {
  data= {
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8
  }

  let convertData = JSON.stringify(data);

  localStorage.setItem('prod', convertData)
}