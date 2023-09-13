// Soldier class
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking class (inherits from Soldier)
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage); // Call the parent class's method
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon class (inherits from Soldier)
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage); // Call the parent class's method
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War class
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    genericAttack(attackerArmy, defenderArmy) {
        const randomAttackerIndex = Math.floor(Math.random() * attackerArmy.length);
        const randomDefenderIndex = Math.floor(Math.random() * defenderArmy.length);

        const attacker = attackerArmy[randomAttackerIndex];
        const defender = defenderArmy[randomDefenderIndex];

        const damage = attacker.attack();
        const result = defender.receiveDamage(damage);

        if (defender.health <= 0) {
            defenderArmy.splice(randomDefenderIndex, 1);
        }

        return result;
    }

    vikingAttack() {
        return this.genericAttack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this.genericAttack(this.saxonArmy, this.vikingArmy);
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

// Example usage:
const viking1 = new Viking("Ragnar", 100, 50);
const viking2 = new Viking("Lagertha", 120, 45);
const saxon1 = new Saxon(80, 35);
const saxon2 = new Saxon(90, 40);

const war = new War();
war.addViking(viking1);
war.addViking(viking2);
war.addSaxon(saxon1);
war.addSaxon(saxon2);

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
