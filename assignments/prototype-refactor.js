/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/







// ********************GameObject Constructor REFACTORED to class*********************
class GameObject{
    constructor(gLevelAtt){
        this.createdAt = gLevelAtt.createdAt;
        this.name = gLevelAtt.name;
        this.dimensions = gLevelAtt.dimensions;
        // console.log(this);
    }
    // Methods
    destroy(){
        return `${this.name} was removed from the game.`
    }
}


// -----------Original GameObject Constructor-----------------

/*

function GameObject(gLevelAtt){
    this.createdAt = gLevelAtt.createdAt,
    this.name = gLevelAtt.name,
    this.dimensions = gLevelAtt.dimensions,
    console.log(this);
    }
  
    GameObject.prototype.destroy = function(){
      return `${this.name} was removed from the game.`
    }

*/

  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

// ********************CharacterStats Constructor REFACTORED to class*********************
class CharacterStats extends GameObject{
    constructor(charStats){
        super(charStats);
        this.healthPoints = charStats.healthPoints;
    }
    // Methods
    takeDamage(){
        return `${this.name} took damage.`
    }
}


  // -----------Original CharacterStats Constructor-----------------

/*

  function CharacterStats(charStats){
    GameObject.call(this, charStats),
    // GameObject.bind(this, charStats),
    this.healthPoints = charStats.healthPoints
  }

  CharacterStats.prototype = Object.create(GameObject.prototype);

  CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage.`
  };

*/
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */


// ********************Humanoid Constructor REFACTORED to class*********************
class Humanoid extends CharacterStats{
    constructor(mortalAtt){
        super(mortalAtt);
        this.team = mortalAtt.team;
        this.weapons = mortalAtt.weapons;
        this.language = mortalAtt.language;
    }
    // Methods
    greet(){
        return `${this.name} offers a greeting in ${this.language}.`
    }
}



    // -----------Original Humanoid Constructor-----------------

/*

  function Humanoid(mortalAtt){
    CharacterStats.call(this, mortalAtt),
    // CharacterStats.bind(this, mortalAtt),
    this.team = mortalAtt.team,
    this.weapons = mortalAtt.weapons,
    this.language = mortalAtt.language
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}.`
  };
  
*/
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  // /*
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  

// Test Console Logs
// /*
// ----------------------PROTOTYPE REFACTOR LOGS----------------------------
    console.log("----------------------PROTOTYPE REFACTOR LOGS START----------------------------");
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log("-_-*-_-_-*-_-_-*-_-_-*-_--_-*-_-PROTOTYPE REFACTOR LOGS END-_-*-_-_-*-_-_-*-_-_-*-_--_-*-_-");
// */


  // */
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    

// ********************Hero Constructor REFACTORED to class*********************
class Hero extends Humanoid{
    constructor(heroAtt){
        super(heroAtt);
        this.defAttack = heroAtt.defAttack;
        this.defAttackDmg = heroAtt.defAttackDmg
    }
    // Methods

}


// -----------Original Hero Constructor-----------------

/*

    function Hero(heroAtt){
      Humanoid.call(this, heroAtt);
      this.defAttack = heroAtt.defAttack;
      this.defAttackDmg = heroAtt.defAttackDmg
    }

*/

    const guardian = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 3,
        width: 3,
        height: 5,
      },
      healthPoints: 45,
      name: 'Big Boss',
      team: 'Platinum Guard',
      weapons: [
        'Diamond Blade',
        'Platinum Shield'
      ],
      language: 'Mumble',
      defAttack: 'Explosive Guard',
      defAttackDmg: 7,
    });
  


    // ********************Villain Constructor REFACTORED to class*********************
class Villain extends Humanoid{
    constructor(villAtt){
        super(villAtt);
        this.defAttack = villAtt.defAttack;
        this.defAttackDmg = villAtt.defAttackDmg
    }
    // Methods
    
}


// -----------Original Villain Constructor-----------------

/*

    function Villain(villAtt){
      Humanoid.call(this, villAtt);
      this.defAttack = villAtt.defAttack;
      this.defAttackDmg = villAtt.defAttackDmg
    }

*/


    const peasant = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 3,
      },
      healthPoints: 65,
      name: 'Terror',
      team: 'Gutterclass',
      weapons: [
        'Pitchfork',
      ],
      language: 'Screech',
      defAttack: 'Lung',
      defAttackDmg: 3,
    });
  
  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
