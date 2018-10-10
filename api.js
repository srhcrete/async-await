class Api {
  constructor () {
    this.pizza = { id: 1, name: 'pizza', topping: 'baloney', message: 'A spicy meatball'}
    this.toppings = [ this.pizza.topping, this.pizza.topping, this.pizza.topping ]
    this.messages = this.pizza.message
  }

  getPizza() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.pizza), 200)
    })
  }

  getToppings(pizzaId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.toppings), 200)
    })
  }

  throwError() {
    return new Promise((resolve, reject) =>{
      setTimeout(() => reject(new Error('Intentional Error')), 200)
    })
  }
}

module.exports = Api
