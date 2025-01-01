export default class Unit {
    constructor(name, critRate, damageMatrix) {
        this.name = name;
        this.critRate = critRate;
        this.damageMatrix = damageMatrix;
    }
}

const defaultMatrix = {
    "Soldier": 50,
    "Dog": 50,
    "Spearman": 50,
    "Archer": 50,
    "Mage": 50,
    "Cavalry": 50,
    "Ballista": 50,
    "Trebuchet": 50,
    "Giant": 50,
    "Rifleman": 50,
    "Air Trooper": 50,
    "Aeronaut": 50,
    "Dragon": 50,
    "Amphibian": 50,
    "Riverboat": 50,
    "Turtle": 50,
    "Harpoon Ship": 50,
    "Frog": 50,
    "Kraken": 50,
    "Warship": 50,
    "Guardian": 50,
    "Commander": 50,
    "Building": 50
    }

export const units = {
    Soldier: new Unit("soldier", 1, defaultMatrix),
    Dog: new Unit("dog", 1, defaultMatrix),
    Spearman: new Unit("spearman", 1, defaultMatrix),
    Archer: new Unit("archer", 1, defaultMatrix),
    Mage: new Unit("mage", 1, defaultMatrix),
    Cavalry: new Unit("cavalry", 1, defaultMatrix),
    Ballista: new Unit("ballista", 1, defaultMatrix),
    Trebuchet: new Unit("trebuchet", 1, defaultMatrix),
    Giant: new Unit("giant", 1, defaultMatrix),
    Rifleman: new Unit("rifleman", 1, defaultMatrix),
    Air_Trooper: new Unit("air trooper", 1, defaultMatrix),
    Aeronaut: new Unit("aeronaut", 1, defaultMatrix),
    Dragon: new Unit("dragon", 1, defaultMatrix),
    Amphibian: new Unit("amphibian", 1, defaultMatrix),
    Riverboat: new Unit("riverboat", 1, defaultMatrix),
    Turtle: new Unit("turtle", 1, defaultMatrix),
    Harpoon_Ship: new Unit("harpoon ship", 1, defaultMatrix),
    Frog: new Unit("frog", 1, defaultMatrix),
    Kraken: new Unit("kraken", 1, defaultMatrix),
    Warship: new Unit("warship", 1, defaultMatrix),
    Guardian: new Unit("guardian", 1, defaultMatrix),
    Commander: new Unit("commander", 1, defaultMatrix),
    Building: new Unit("building", 1, defaultMatrix),
};