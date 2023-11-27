class Warrior{
    constructor(life, power) {
      this.life = life;
      this.power = power;
      
    }
    attack() {
      return this.power
    }
    defend(damage){
       this.life = this.life - damage;
       console.log("warrior life:", this.life)
    }
  }

  class Maya extends Warrior{
    constructor(life, power){
        super(life, power); 
    }
    drinkColaCao(){
        this.power = this.power +10
        console.log("maya power:",this.power);
    }
  }

  class Aztec extends Warrior{
    constructor(life, power){
        super(life, power); 
    }
    drinkNesquik(){
        this.life = this.life +10
        console.log("azteca life:", this.life);
    }
  }


  let azteca = new Aztec(20 , 50);
  let maya = new Maya(30, 60);
  azteca.drinkNesquik()
  maya.drinkColaCao()
  console.log("maya ataca a azteca y azteca se defiende. azteca life:");
  azteca.defend(maya.attack())

  console.log("azteca ataca a maya y maya se defiende. maya life:");
  maya.defend(azteca.attack())