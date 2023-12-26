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

const chicken = new Chicken();
const penguin = new Penguin();

makeBirdFly(chicken);
makeBirdFly(penguin);
