class Api {
  constructor () {
    this.pizza = { id: 1, name: 'pizza', topping: {id: 1, name: 'baloney'}, message: 'A spicy meatball'}
    this.toppingsArr = [ this.pizza.topping, this.pizza.topping, this.pizza.topping ]
    this.toppings = [this.pizza.topping.name, this.pizza.topping.name, this.pizza.topping.name ]
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

  getToppingsObj(pizzaId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.toppingsArr), 200)
    })
  }

  //for testing error handling
  throwError() {
    return new Promise((resolve, reject) =>{
      setTimeout(() => reject(new Error('Intentional Error')), 200)
    })
  }
}

module.exports = Api
