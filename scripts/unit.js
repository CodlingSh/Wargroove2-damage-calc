export default class Unit {
    constructor(name, unitType, critRate, damageMatrix) {
        this.name = name;
        this.unitType = unitType;
        this.critRate = critRate;
        this.damageMatrix = damageMatrix;
    }
}

const nullMatrix = {
    "Soldier": null,
    "Dog": null,
    "Spearman": null,
    "Archer": null,
    "Mage": null,
    "Cavalry": null,
    "Giant": null,
    "Wagon": null,
    "Ballista": null,
    "Trebuchet": null,
    "Theif": null,
    "Rifleman": null,
    "Barge": null,
    "Riverboat": null,
    "Turtle": null,
    "Harpoon_ship": null,
    "Kraken": null,
    "Warship": null,
    "Amphibian": null,
    "Frog": null,
    "Air_trooper": null,
    "Commander": null,
    "Guardian": null,
    "Villager": null,
    "Building": null,
    "Stronghold": null,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const soldierMatrix = {
    "Soldier": 60,
    "Dog": 50,
    "Spearman": 40,
    "Archer": 70,
    "Mage": 60,
    "Cavalry": 20,
    "Giant": 10,
    "Wagon": 40,
    "Ballista": 40,
    "Trebuchet": 35,
    "Theif": 100,
    "Rifleman": 70,
    "Barge": 15,
    "Riverboat": 40,
    "Turtle": 25,
    "Harpoon_ship": 20,
    "Kraken": 20,
    "Warship": 10,
    "Amphibian": 60,
    "Frog": 50,
    "Air_trooper": 65,
    "Commander": 15,
    "Guardian": 10,
    "Villager": 60,
    "Building": 40,
    "Stronghold": 22,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const dogMatrix = {
    "Soldier": 80,
    "Dog": 70,
    "Spearman": 50,
    "Archer": 80,
    "Mage": 60,
    "Cavalry": 15,
    "Giant": 10,
    "Wagon": 35,
    "Ballista": 45,
    "Trebuchet": 40,
    "Theif": 90,
    "Rifleman": 115,
    "Barge": 25,
    "Riverboat": 50,
    "Turtle": 20,
    "Harpoon_ship": 20,
    "Kraken": 30,
    "Warship": 10,
    "Amphibian": 80,
    "Frog": 55,
    "Air_trooper": 80,
    "Commander": 20,
    "Guardian": 10,
    "Villager": 80,
    "Building": 25,
    "Stronghold": 15,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const spearmanMatrix = {
    "Soldier": 80,
    "Dog": 85,
    "Spearman": 60,
    "Archer": 75,
    "Mage": 70,
    "Cavalry": 75,
    "Giant": 15,
    "Wagon": 50,
    "Ballista": 60,
    "Trebuchet": 55,
    "Theif": 80,
    "Rifleman": 90,
    "Barge": 25,
    "Riverboat": 55,
    "Turtle": 50,
    "Harpoon_ship": 30,
    "Kraken": 40,
    "Warship": 10,
    "Amphibian": 80,
    "Frog": 105,
    "Air_trooper": 70,
    "Commander": 20,
    "Guardian": 15,
    "Villager": 80,
    "Building": 55,
    "Stronghold": 30,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const archerMatrix = {
    "Soldier": 75,
    "Dog": 80,
    "Spearman": 55,
    "Archer": 70,
    "Mage": 80,
    "Cavalry": 45,
    "Giant": 15,
    "Wagon": 40,
    "Ballista": 35,
    "Trebuchet": 30,
    "Theif": 75,
    "Rifleman": 85,
    "Barge": 25,
    "Riverboat": 55,
    "Turtle": 25,
    "Harpoon_ship": 30,
    "Kraken": 30,
    "Warship": 25,
    "Amphibian": 75,
    "Frog": 60,
    "Air_trooper": 50,
    "Commander": 10,
    "Guardian": 10,
    "Villager": 75,
    "Building": 25,
    "Stronghold": 15,
    "Ballon": 25,
    "Aeronaut": 35,
    "Sky_rider": 25,
    "Dragon": 15
};

const mageMatrix = {
    "Soldier": 85,
    "Dog": 90,
    "Spearman": 70,
    "Archer": 90,
    "Mage": 50,
    "Cavalry": 35,
    "Giant": 25,
    "Wagon": 40,
    "Ballista": 35,
    "Trebuchet": 45,
    "Theif": 80,
    "Rifleman": 80,
    "Barge": 30,
    "Riverboat": 50,
    "Turtle": 30,
    "Harpoon_ship": 40,
    "Kraken": 30,
    "Warship": 20,
    "Amphibian": 60,
    "Frog": 50,
    "Air_trooper": 55,
    "Commander": 20,
    "Guardian": 10,
    "Villager": 105,
    "Building": 40,
    "Stronghold": 22,
    "Ballon": 105,
    "Aeronaut": 145,
    "Sky_rider": 135,
    "Dragon": 85
};

const cavalryMatrix = {
    "Soldier": 95,
    "Dog": 125,
    "Spearman": 50,
    "Archer": 105,
    "Mage": 115,
    "Cavalry": 60,
    "Giant": 30,
    "Wagon": 60,
    "Ballista": 90,
    "Trebuchet": 85,
    "Theif": 95,
    "Rifleman": 105,
    "Barge": 40,
    "Riverboat": 100,
    "Turtle": 50,
    "Harpoon_ship": 70,
    "Kraken": 65,
    "Warship": 50,
    "Amphibian": 90,
    "Frog": 75,
    "Air_trooper": 85,
    "Commander": 30,
    "Guardian": 20,
    "Villager": 95,
    "Building": 70,
    "Stronghold": 37,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const ballistaMatrix = {
    "Soldier": 45,
    "Dog": 55,
    "Spearman": 30,
    "Archer": 35,
    "Mage": 45,
    "Cavalry": 30,
    "Giant": 15,
    "Wagon": 35,
    "Ballista": 25,
    "Trebuchet": 15,
    "Theif": 45,
    "Rifleman": 55,
    "Barge": 25,
    "Riverboat": 45,
    "Turtle": 25,
    "Harpoon_ship": 30,
    "Kraken": 20,
    "Warship": 25,
    "Amphibian": 35,
    "Frog": 35,
    "Air_trooper": 35,
    "Commander": 15,
    "Guardian": 10,
    "Villager": 45,
    "Building": 35,
    "Stronghold": 20,
    "Ballon": 115,
    "Aeronaut": 135,
    "Sky_rider": 100,
    "Dragon": 90
};

const trebuchetMatrix = {
    "Soldier": 105,
    "Dog": 115,
    "Spearman": 80,
    "Archer": 125,
    "Mage": 95,
    "Cavalry": 85,
    "Giant": 60,
    "Wagon": 75,
    "Ballista": 90,
    "Trebuchet": 85,
    "Theif": 105,
    "Rifleman": 115,
    "Barge": 85,
    "Riverboat": 105,
    "Turtle": 50,
    "Harpoon_ship": 80,
    "Kraken": 80,
    "Warship": 30,
    "Amphibian": 105,
    "Frog": 85,
    "Air_trooper": 90,
    "Commander": 30,
    "Guardian": 30,
    "Villager": 105,
    "Building": 90,
    "Stronghold": 48,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const giantMatrix = {
    "Soldier": 135,
    "Dog": 155,
    "Spearman": 105,
    "Archer": 155,
    "Mage": 115,
    "Cavalry": 90,
    "Giant": 50,
    "Wagon": 80,
    "Ballista": 105,
    "Trebuchet": 115,
    "Theif": 135,
    "Rifleman": 145,
    "Barge": 70,
    "Riverboat": 140,
    "Turtle": 105,
    "Harpoon_ship": 95,
    "Kraken": 55,
    "Warship": 85,
    "Amphibian": 135,
    "Frog": 110,
    "Air_trooper": 120,
    "Commander": 40,
    "Guardian": 20,
    "Villager": 135,
    "Building": 90,
    "Stronghold": 48,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const riflemanMatrix = {
    "Soldier": 80,
    "Dog": 15,
    "Spearman": 70,
    "Archer": 60,
    "Mage": 70,
    "Cavalry": 10,
    "Giant": 10,
    "Wagon": 15,
    "Ballista": 10,
    "Trebuchet": 10,
    "Theif": 70,
    "Rifleman": 60,
    "Barge": 10,
    "Riverboat": 50,
    "Turtle": 25,
    "Harpoon_ship": 25,
    "Kraken": 30,
    "Warship": 10,
    "Amphibian": 60,
    "Frog": 30,
    "Air_trooper": 80,
    "Commander": 10,
    "Guardian": 10,
    "Villager": 125,
    "Building": 10,
    "Stronghold": 8,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const airTrooperMatrix = {
    "Soldier": 50,
    "Dog": 55,
    "Spearman": 40,
    "Archer": 75,
    "Mage": 45,
    "Cavalry": 65,
    "Giant": 25,
    "Wagon": 40,
    "Ballista": 75,
    "Trebuchet": 75,
    "Theif": 50,
    "Rifleman": 75,
    "Barge": 25,
    "Riverboat": 40,
    "Turtle": 15,
    "Harpoon_ship": 20,
    "Kraken": 25,
    "Warship": 20,
    "Amphibian": 50,
    "Frog": 40,
    "Air_trooper": 45,
    "Commander": 15,
    "Guardian": 10,
    "Villager": 50,
    "Building": 35,
    "Stronghold": 20,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const aeronautMatrix = {
    "Soldier": 70,
    "Dog": 60,
    "Spearman": 50,
    "Archer": 70,
    "Mage": 30,
    "Cavalry": 80,
    "Giant": 15,
    "Wagon": 40,
    "Ballista": 40,
    "Trebuchet": 60,
    "Theif": 70,
    "Rifleman": 80,
    "Barge": 40,
    "Riverboat": 70,
    "Turtle": 50,
    "Harpoon_ship": 35,
    "Kraken": 30,
    "Warship": 50,
    "Amphibian": 70,
    "Frog": 55,
    "Air_trooper": 90,
    "Commander": 20,
    "Guardian": 10,
    "Villager": 70,
    "Building": 40,
    "Stronghold": 22,
    "Ballon": 60,
    "Aeronaut": 55,
    "Sky_rider": 35,
    "Dragon": 40
};

const dragonMatrix = {
    "Soldier": 125,
    "Dog": 155,
    "Spearman": 125,
    "Archer": 145,
    "Mage": 70,
    "Cavalry": 105,
    "Giant": 70,
    "Wagon": 85,
    "Ballista": 115,
    "Trebuchet": 115,
    "Theif": 125,
    "Rifleman": 135,
    "Barge": 115,
    "Riverboat": 150,
    "Turtle": 85,
    "Harpoon_ship": 90,
    "Kraken": 75,
    "Warship": 95,
    "Amphibian": 125,
    "Frog": 65,
    "Air_trooper": 125,
    "Commander": 30,
    "Guardian": 35,
    "Villager": 125,
    "Building": 70,
    "Stronghold": 37,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const amphibianMatrix = {
    "Soldier": 40,
    "Dog": 50,
    "Spearman": 30,
    "Archer": 40,
    "Mage": 50,
    "Cavalry": 20,
    "Giant": 10,
    "Wagon": 40,
    "Ballista": 30,
    "Trebuchet": 25,
    "Theif": 40,
    "Rifleman": 50,
    "Barge": 15,
    "Riverboat": 30,
    "Turtle": 35,
    "Harpoon_ship": 50,
    "Kraken": 40,
    "Warship": 10,
    "Amphibian": 30,
    "Frog": 25,
    "Air_trooper": 35,
    "Commander": 10,
    "Guardian": 10,
    "Villager": 40,
    "Building": 20,
    "Stronghold": 13,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const riverboatMatrix = {
    "Soldier": 60,
    "Dog": 60,
    "Spearman": 45,
    "Archer": 60,
    "Mage": 45,
    "Cavalry": 25,
    "Giant": 10,
    "Wagon": null,
    "Ballista": null,
    "Trebuchet": null,
    "Theif": 60,
    "Rifleman": 70,
    "Barge": 25,
    "Riverboat": 50,
    "Turtle": 25,
    "Harpoon_ship": 30,
    "Kraken": 20,
    "Warship": 30,
    "Amphibian": 40,
    "Frog": 30,
    "Air_trooper": 55,
    "Commander": 15,
    "Guardian": 10,
    "Villager": 55,
    "Building": 65,
    "Stronghold": 35,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const turtleMatrix = {
    "Soldier": 90,
    "Dog": 80,
    "Spearman": 60,
    "Archer": 65,
    "Mage": 60,
    "Cavalry": 15 ,
    "Giant": 10,
    "Wagon": null,
    "Ballista": null,
    "Trebuchet": null,
    "Theif": 115,
    "Rifleman": 85,
    "Barge": 60,
    "Riverboat": 115,
    "Turtle": 55,
    "Harpoon_ship": 65,
    "Kraken": 50,
    "Warship": 85,
    "Amphibian": 115,
    "Frog": 95,
    "Air_trooper": 65,
    "Commander": 20,
    "Guardian": 10,
    "Villager": 70,
    "Building": null,
    "Stronghold": null,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
}

const harpoonShipMatrix = {
    "Soldier": null,
    "Dog": null,
    "Spearman": null,
    "Archer": null,
    "Mage": null,
    "Cavalry": null,
    "Giant": null,
    "Wagon": null,
    "Ballista": null,
    "Trebuchet": null,
    "Theif": null,
    "Rifleman": null,
    "Barge": 20,
    "Riverboat": 40,
    "Turtle": 65,
    "Harpoon_ship": 35,
    "Kraken": 15,
    "Warship": 25,
    "Amphibian": 35,
    "Frog": 25,
    "Air_trooper": null,
    "Commander": null,
    "Guardian": null,
    "Villager": null,
    "Building": null,
    "Stronghold": null,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const frogMatrix = {
    "Soldier": 70,
    "Dog": 65,
    "Spearman": 55,
    "Archer": 85,
    "Mage": 65,
    "Cavalry": 40,
    "Giant": 20,
    "Wagon": 45,
    "Ballista": 45,
    "Trebuchet": 45,
    "Theif": 70,
    "Rifleman": 80,
    "Barge": 25,
    "Riverboat": 45,
    "Turtle": 25,
    "Harpoon_ship": 30,
    "Kraken": 40,
    "Warship": 30,
    "Amphibian": 65,
    "Frog": 55,
    "Air_trooper": 60,
    "Commander": 20,
    "Guardian": 10,
    "Villager": 90,
    "Building": 30,
    "Stronghold": 18,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const krakenMatrix = {
    "Soldier": 60,
    "Dog": 65,
    "Spearman": 45,
    "Archer": 110,
    "Mage": 90,
    "Cavalry": 30,
    "Giant": 15,
    "Wagon": 40,
    "Ballista": 40,
    "Trebuchet": 35,
    "Theif": 70,
    "Rifleman": 75,
    "Barge": 25,
    "Riverboat": 55,
    "Turtle": 25,
    "Harpoon_ship": 30,
    "Kraken": 45,
    "Warship": 60,
    "Amphibian": 90,
    "Frog": 70,
    "Air_trooper": 60,
    "Commander": 20,
    "Guardian": 10,
    "Villager": 70,
    "Building": 30,
    "Stronghold": 18,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const warshipMatrix = {
    "Soldier": 105,
    "Dog": 115,
    "Spearman": 80,
    "Archer": 115,
    "Mage": 85,
    "Cavalry": 75,
    "Giant": 60,
    "Wagon": 65,
    "Ballista": 90,
    "Trebuchet": 85,
    "Theif": 105,
    "Rifleman": 115,
    "Barge": null,
    "Riverboat": null,
    "Turtle": null,
    "Harpoon_ship": null,
    "Kraken": null,
    "Warship": null,
    "Amphibian": 90,
    "Frog": 75,
    "Air_trooper": 90,
    "Commander": 30,
    "Guardian": 30,
    "Villager": 105,
    "Building": 50,
    "Stronghold": 27,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const guardianMatrix = {
    "Soldier": 195,
    "Dog": 200,
    "Spearman": 145,
    "Archer": 180,
    "Mage": 145,
    "Cavalry": 100,
    "Giant": 50,
    "Wagon": 115,
    "Ballista": 125,
    "Trebuchet": 115,
    "Theif": 190,
    "Rifleman": 210,
    "Barge": 80,
    "Riverboat": 150,
    "Turtle": 85,
    "Harpoon_ship": 95,
    "Kraken": 60,
    "Warship": 95,
    "Amphibian": 140,
    "Frog": 115,
    "Air_trooper": 165,
    "Commander": 40,
    "Guardian": 45,
    "Villager": 95,
    "Building": 95,
    "Stronghold": 50,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const commanderMatrix = {
    "Soldier": 120,
    "Dog": 120,
    "Spearman": 80,
    "Archer": 135,
    "Mage": 85,
    "Cavalry": 65,
    "Giant": 50,
    "Wagon": 75,
    "Ballista": 70,
    "Trebuchet": 65,
    "Theif": 100,
    "Rifleman": 110,
    "Barge": 75,
    "Riverboat": 95,
    "Turtle": 85,
    "Harpoon_ship": 75,
    "Kraken": 60,
    "Warship": 60,
    "Amphibian": 95,
    "Frog": 70,
    "Air_trooper": 110,
    "Commander": 45,
    "Guardian": 45,
    "Villager": 100,
    "Building": 75,
    "Stronghold": 40,
    "Ballon": null,
    "Aeronaut": null,
    "Sky_rider": null,
    "Dragon": null
};

const buildingMatrix = {
    "Soldier": 35,
    "Dog": 40,
    "Spearman": 30,
    "Archer": 35,
    "Mage": 40,
    "Cavalry": 15,
    "Giant": 10,
    "Wagon": null,
    "Ballista": null,
    "Trebuchet": null,
    "Theif": null,
    "Rifleman": 45,
    "Barge": null,
    "Riverboat": 40,
    "Turtle": null,
    "Harpoon_ship": null,
    "Kraken": 15,
    "Warship": null,
    "Amphibian": 35,
    "Frog": 30,
    "Air_trooper": 35,
    "Commander": 20,
    "Guardian": 10,
    "Villager": null,
    "Building": null,
    "Stronghold": null,
    "Ballon": null,
    "Aeronaut": 35,
    "Sky_rider": null,
    "Dragon": 10
};

const skyRiderMatrix = {
    "Soldier": null,
    "Dog": null,
    "Spearman": null,
    "Archer": null,
    "Mage": null,
    "Cavalry": null,
    "Giant": null,
    "Wagon": null,
    "Ballista": null,
    "Trebuchet": null,
    "Theif": null,
    "Rifleman": null,
    "Barge": null,
    "Riverboat": null,
    "Turtle": null,
    "Harpoon_ship": null,
    "Kraken": null,
    "Warship": null,
    "Amphibian": null,
    "Frog": null,
    "Air_trooper": null,
    "Commander": null,
    "Guardian": null,
    "Villager": null,
    "Building": null,
    "Stronghold": null,
    "Ballon": 55,
    "Aeronaut": 65,
    "Sky_rider": 40,
    "Dragon": 40
};

export const units = {
    Soldier: new Unit("Soldier", "ground", 1.5, soldierMatrix),
    Dog: new Unit("Dog", "ground", 1.5, dogMatrix),
    Spearman: new Unit("Spearman", "ground", 1.5, spearmanMatrix),
    Archer: new Unit("Archer", "ground", 1.35, archerMatrix),
    Mage: new Unit("Mage", "ground", 1.5, mageMatrix),
    Cavalry: new Unit("Cavalry", "ground", 1.5, cavalryMatrix),
    Ballista: new Unit("Ballista", "ground", 1.5, ballistaMatrix),
    Trebuchet: new Unit("Trebuchet", "ground", 1.5, trebuchetMatrix),
    Giant: new Unit("Giant", "ground", 2.5, giantMatrix),
    Rifleman: new Unit("Rifleman", "ground", 1.5, riflemanMatrix),
    Air_Trooper: new Unit("Air_trooper", "special", 1.5, airTrooperMatrix),
    Aeronaut: new Unit("Aeronaut", "air", 1.25, aeronautMatrix),
    Dragon: new Unit("Dragon", "air", 1.5, dragonMatrix),
    Amphibian: new Unit("Amphibian", "special", 2, amphibianMatrix),
    Riverboat: new Unit("Riverboat", "water", 1.5, riverboatMatrix),
    Turtle: new Unit("Turtle", "water", 1.5, turtleMatrix),
    Harpoon_Ship: new Unit("Harpoon_ship", "water", 1.5, harpoonShipMatrix),
    Frog: new Unit("Frog", "special", 1.5, frogMatrix),
    Kraken: new Unit("Kraken", "water", 1.5, krakenMatrix),
    Warship: new Unit("Warship", "water", 1.5, warshipMatrix),
    Guardian: new Unit("Guardian", "special", 1, guardianMatrix),
    Commander: new Unit("Commander", "special", 1, commanderMatrix),
    Building: new Unit("Building", "building", 1, buildingMatrix),
    Stronghold: new Unit("Stronghold", "building", 1, buildingMatrix),
    Sky_Rider: new Unit("Skyrider", "air", 2, skyRiderMatrix),
    Villager: new Unit("Villager", "ground", 0, nullMatrix),
    Ballon: new Unit("Ballon", "air", 0, nullMatrix),
    Wagon: new Unit("Wagon", "ground", 0, nullMatrix),
    Barge: new Unit("Barge", "water", 0, nullMatrix)
};