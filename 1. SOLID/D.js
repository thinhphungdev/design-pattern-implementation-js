// BAD
class EcomStore {
  constructor(user) {
    // actual Paypal API, access directly from inside the Ecom store
    // this.paypal = new Paypal(user);
    this.user = user;
    this.stripe = new Stripe();
  }

  buyCar(quantity) {
    // this.paypal.processPayment(2000 * quantity * 100);
    this.stripe.processPayment(this.user, 2000);
  }

  buyAirplaneTicket(quantity) {
    // amount of money in penny
    // this.paypal.processPayment(200 * quantity * 100);
    this.stripe.processPayment(this.user, 200);
  }
}

class Paypal {
  constructor(user) {
    this.user = user;
  }

  processPayment(amountInCents) {
    console.log(
      `${this.user} made payment of ${amountInCents} cents with PayPal`
    );
  }
}

class Stripe {
  constructor() {}

  processPayment(user, amountInDollars) {
    console.log(`${user} made payment of ${amountInDollars} with Stripe!`);
  }
}
