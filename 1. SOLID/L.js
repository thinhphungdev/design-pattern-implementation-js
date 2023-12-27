/////////////////////////////
////////////BAD EXAMPLE////////////
/////////////////////////////

// 1️⃣ BASE CLASS
class Bird {
  fly() {
    console.log('I can FLY!');
  }
}

// 2️⃣ SUBCLASS
class Chicken extends Bird {
  chip() {
    console.log('I can CHIP!');
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error('Penguin cannot fly!');
  }

  swim() {
    console.log('I can SWIM!');
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

// const chicken = new Chicken();
// const penguin = new Penguin();

// makeBirdFly(chicken);
// makeBirdFly(penguin);

/////////////////////////////
////////////GOOD EXAMPLE////////////
/////////////////////////////
// 1️⃣ BASE CLASS
class FlyBird {
  fly() {
    console.log('I can FLY!');
  }
}

class SwimBird {
  swim() {
    console.log('I can SWIM');
  }
}

// 2️⃣ SUBCLASS
class Chicken extends FlyBird {
  chip() {
    console.log('I can CHIP!');
  }
}

class Penguin extends SwimBird {}

function makeBirdFly(bird) {
  bird.fly();
}

function makeBirdSwim(bird) {
  bird.swim();
}

// const penguin = new Penguin();
// const chicken = new Chicken();

// makeBirdFly(chicken);
// makeBirdSwim(penguin);
