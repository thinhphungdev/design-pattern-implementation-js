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
  processPayment(user, amountInDollars) {
    console.log(`${user} made payment of ${amountInDollars} with Stripe!`);
  }
}
//////////////////////////////////////
// GOOD EXAMPLE
//////////////////////////////////////

class GoodEcomStore {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  buyCar(quantity) {
    this.paymentProcessor.pay(quantity);
  }

  buyAirplaneTicket(quantity) {
    this.paymentProcessor.pay(quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.user = user;
    this.stripe = new Stripe();
  }

  pay(amountInDollars) {
    this.stripe.processPayment(this.user, amountInDollars);
  }
}

class PayPalPaymentProcessor {
  constructor(user) {
    this.paypal = new Paypal(user);
  }

  pay(amountInCents) {
    this.paypal.processPayment(amountInCents);
  }
}

// const store = new GoodEcomStore(new PayPalPaymentProcessor('Jay'));
const store = new GoodEcomStore(new StripePaymentProcessor('Jax'));
store.buyCar(2);
store.buyAirplaneTicket(3);
