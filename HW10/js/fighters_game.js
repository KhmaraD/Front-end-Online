class Fighter {
    constructor(unit) {
        this._name = unit.name;
        this._damage = unit.damage;
        this._strength = unit.strength;
        this._agility = unit.agility;
        this._hp = unit.hp;
        this._totalHp = unit.hp;
        this._wins = 0;
        this._losses = 0;
    }
    
    getName() {
        return this._name; 
    }
    
    getDamage() {
        return this._damage; 
    }
    
    getStrength() {
        return this._strength; 
    }
    
    getAgility() {
        return this._agility; 
    }
    
    getHealth() {
        return this._hp; 
    }
    
    addWin() {
        this._wins += 1; 
    }
    
    addLoss() {
        this._losses += 1; 
    }
    
    dealDamage(damage) {
        this._hp -= damage;
        if ( this._hp < 0 ) {
            this._hp = 0;
        }
    }
    
    attack(defender) {
        const rate = 100;
        let random = Math.random() * rate;
        let success = rate - (defender.getStrength() + defender.getAgility());
        if ( success < 0 ) {
            success = 0;
        }
        if ( random < success ) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
    
    logCombatHistory() {
        console.log(`Name: ${this.getName()}, Wins: ${this.getWins()}, Losses: ${this.getLosses()}`);
    }
    
    heal(health) {
        this._hp += health;
        if ( this._hp > this._totalHp ) {
            this._hp = this._totalHp;
        }
    }
}

function battle(fighter1, fighter2) {
    if ( fighter1.getHealth() === 0 ) {
        console.log(`${fighter1.getName()} is dead and can't fight.`);
        return;
    }
    if ( fighter2.getHealth() === 0 ) {
        console.log(`${fighter2.getName()} is dead and can't fight.`);
        return;
    }
    
    while ( fighter1.getHealth() && fighter2.getHealth() ) {
        fighter1.attack(fighter2);
        
        if ( fighter2.getHealth() === 0 ) {
            console.log(`${fighter1.getName()} has won!`);
            fighter1.addWin();
            fighter2.addLoss();
            break;
        }
        
        fighter2.attack(fighter1);
        
        if ( fighter1.getHealth() === 0 ) {
            console.log(`${fighter2.getName()} has won!`);
            fighter2.addWin();
            fighter1.addLoss();
            break;
        }
    }
}
