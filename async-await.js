const Api = require('./api')
//showcase promise chain
function promiseChain() {
  const api = new Api();
  let pizza, toppings

  api.getPizza()
  .then((returnedPizza) => {
    pizza = returnedPizza
    name = pizza.name
    return api.getToppings(pizza.id)
  })
  .then((returnedToppings) => {
    toppings = returnedToppings
  })
  .then(() => {
    message = pizza.message
    console.log('promiseChain', { name, toppings, message })
  }).catch((err) => {
    console.error(err);
  })
}

promiseChain();

async function asyncAwait() {
  try{
    const api = new Api();
    const pizza = await api.getPizza()
    const name = pizza.name
    const toppings = await api.getToppings(pizza.id)
    const message = pizza.message
    console.log('asyncAwait', { name, toppings, message })
  } catch(err) {
    console.error(err)
  }
}

asyncAwait();

async function parallelLoop() {
  const api = new Api();
  const pizza = await api.getPizza()
  const toppings = await api.getToppingsObj(pizza.id)
  const toppingPromises = toppings.map(topping => api.getToppingsObj(topping.id))
  const moreToppings = await Promise.all(toppingPromises)
  console.log('parallelLoop', moreToppings)
}

parallelLoop();
