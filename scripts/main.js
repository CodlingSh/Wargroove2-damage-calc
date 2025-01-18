import Unit, { units } from "./unit.js"
"use strict";

// Global object to keep track of the state of the form
let formState = {
    attackUnit: units.Soldier,
    defendUnit: units.Soldier,
    attackCrit: false,
    defendCrit: false,
    attackHealth: 100,
    defendHealth: 100,
    attackTerrain: 1,
    defendTerrain: 1
}

/**
 * Function to show the menus. Basically just removes a tailwind class
 * @param {bool} isUnit - Bool to determin if we are selecting unit menu or terrain menu
 * @param {bool} isAttacking - Bool to determin whether to show menu for attacking or defending player
 * @returns {null} Does not return anything
 * @example document.getElementById("attacking_unit").addEventListener("click", () => {showMenu(true, true)});
 */
function showMenu(isUnit, isAttacking) {
    let menu = null;
    const dimLayer = document.getElementById("dimming_layer");

    // Turn on dimming layer
    dimLayer.classList.replace("opacity-0", "opacity-60");
    
    if (isUnit) {
        menu = isAttacking ? document.getElementById("attack_menu") : document.getElementById("defend_menu");
    }
    else {
        menu = isAttacking ? document.getElementById("attack_terrain_menu") : document.getElementById("defend_terrain_menu");
    }

    // Remove translate class
    menu.classList.remove("translate-y-offscreen");
}

function updateUnit(isAttacking, unitId) {
    let imgElement = isAttacking ? document.getElementById("attacking_unit").querySelector("img") : document.getElementById("defending_unit").querySelector("img");
    let unitObject = null;

    // Strip the "_d" from the end of defensive units
    if (!isAttacking) {
        unitId = unitId.replace("_d", "");
    }

    // Select the proper unit object
    for (const [key] of Object.entries(units)) {
        if (units[key].name === unitId) {
            console.log("UNIT ASSIGNED");
            unitObject = units[key];
            console.log("UNIT SELECTED: " + unitObject.name);
            break;
        }
    }
    
    // Assign unit to form
    isAttacking ? formState.attackUnit = unitObject : formState.defendUnit = unitObject;

    console.log(formState.attackUnit);
    // Set the image on the form
    imgElement.src = isAttacking ? "assets/images/sprites/Cherrystone/" + formState.attackUnit.name + ".png" : "assets/images/sprites/Felheim/" + formState.defendUnit.name + ".png";
}

function updateTerrain(isAttacking, terrainId) {
    let imgElement = isAttacking ? document.getElementById("attacking_env").querySelector("img") : document.getElementById("defending_env").querySelector("img")
    let finalValue = null;

    // Strip the "_d" from the end of defensive terrain
    if (!isAttacking) {
        terrainId = terrainId.replace("_d", "");
    }

    // Get the number and convert value
    finalValue = Number(terrainId[terrainId.length - 1]);
    if (terrainId.startsWith("danger")) finalValue *= -1;

    // Set formState
    isAttacking ? formState.attackTerrain = finalValue : formState.defendTerrain = finalValue;

    // Set image
    imgElement.src = isAttacking ? document.getElementById("attacking_env").querySelector("img").src = "/assets/images/terrain/" + terrainId + ".png" : document.getElementById("defending_env").querySelector("img").src = "/assets/images/terrain/" + terrainId + ".png";
}

function updateHealth(isAttacking, healthElement) {
    let value = Number(healthElement.value);

    if (value > 100) {
        value = 100;
    }
    if (value < 0) {
        value = 0;
    }

    healthElement.value = value;
    isAttacking ? formState.attackHealth = value : formState.defendHealth = value;
}

function hideMenu(e) {
    const dimLayer = document.getElementById("dimming_layer");

    console.log(e.parentElement);
    setTimeout(() => {
        e.parentElement.parentElement.classList.add("translate-y-offscreen");
        dimLayer.classList.replace("opacity-60", "opacity-0");
        console.log("e");
    }, 100);
}

function calculateDamage() {
    let atkPower = formState.attackUnit.damageMatrix[formState.defendUnit.name] === null ? 0 : formState.attackUnit.damageMatrix[formState.defendUnit.name];
    let defPower = formState.defendUnit.damageMatrix[formState.attackUnit.name] === null ? 0 : formState.defendUnit.damageMatrix[formState.attackUnit.name];
    let atkTerrain = formState.attackTerrain;
    let defTerrain = formState.defendTerrain;
    let atkHealth = formState.attackHealth;
    let defHealth = formState.defendHealth;
    let atkCritical = formState.attackCrit ? formState.attackUnit.critRate : 1;
    let defCritical = formState.defendCrit ? formState.defendUnit.critRate : 1;
    let multiplier = 1;
    let atkDamage = null;
    let defDamage = null;

    // Remove defences for air units
    if (formState.attackUnit.unitType === "air") {
        atkTerrain = 0;
    }
    if (formState.defendUnit.unitType === "air") {
        defTerrain = 0;
    }

    // Set health to 1 when on negative terrain
    if (atkTerrain < 0) {
        atkHealth = 100
    }
    if (defTerrain < 0) {
        defHealth = 100
    }

    // Find the damage attacker will do to the enemy
    defDamage = Math.round(atkPower * atkCritical * (atkHealth / 100) * multiplier * (1 - ((defHealth / 100) * defTerrain / 10)));
    defHealth -= defDamage
    if (defHealth <= 0) {
        console.log("Def health is less than 0")
        atkDamage = 0;
    }
    else {
        atkDamage = Math.round(defPower * defCritical * (defHealth / 100) * multiplier * (1 - ((atkHealth / 100) * atkTerrain / 10))); 
    }
    
    console.log(`atkPower: ${atkPower} defPower: ${defPower} atkHealth: ${atkHealth} defHealth: ${defHealth} atkCritical: ${atkCritical} defCritical: ${defCritical} multiplier: ${multiplier} atkDamage: ${atkDamage} defDamage: ${defDamage}`);
    
    // Update the results
    document.getElementById("atk_result_img").src = "/assets/images/sprites/Cherrystone/" + formState.attackUnit.name + ".png";
    document.getElementById("def_result_img").src = "/assets/images/sprites/Felheim/" + formState.defendUnit.name + ".png";
    document.getElementById("attack_damage").innerHTML = defDamage + "%";
    document.getElementById("defend_damage").innerHTML = atkDamage + "%";
}


// Event handlers
// UNITS
document.getElementById("attacking_unit").addEventListener("click", () => {showMenu(true, true)});
document.getElementById("defending_unit").addEventListener("click", () => {showMenu(true, false)});
// TERRAINS
document.getElementById("attacking_env").addEventListener("click", () => {showMenu(false, true)});
document.getElementById("defending_env").addEventListener("click", () => {showMenu(false, false)});
// Attack unit
const atkUnitBtns = document.getElementById("attack_menu_form").querySelectorAll("input");
Array.from(atkUnitBtns).forEach((btn) => {
    btn.addEventListener("click", () => {
        updateUnit(true, btn.id);
        calculateDamage();
        hideMenu(btn)
    })
})
// Defend unit
const defUnitBtns = document.getElementById("defend_menu_form").querySelectorAll("input");
Array.from(defUnitBtns).forEach((btn) => {
    btn.addEventListener("click", () => {
        updateUnit(false, btn.id);
        calculateDamage();
        hideMenu(btn)
    })
})
// Attack Terrain
const atkTerrainBtns = document.getElementById("attack_terrain_form").querySelectorAll("input");
Array.from(atkTerrainBtns).forEach((btn) => {
    btn.addEventListener("click", () => {
        updateTerrain(true, btn.id);
        calculateDamage();
        hideMenu(btn);
    })
})
// Defend Terrain
const defTerrainBtns = document.getElementById("defend_terrain_form").querySelectorAll("input");
Array.from(defTerrainBtns).forEach((btn) => {
    btn.addEventListener("click", () => {
        updateTerrain(false, btn.id);
        calculateDamage();
        hideMenu(btn);
    })
})
// Attack Health
const atkHealthInput = document.getElementById("attacker_health");
atkHealthInput.addEventListener("input", () => {
    updateHealth(true, atkHealthInput);
    calculateDamage();
})
// Defend Health
const defHealthInput = document.getElementById("defender_health");
defHealthInput.addEventListener("input", () => {
    updateHealth(false, defHealthInput);
    calculateDamage();
})
// Attack Crit
const atkCritSwitch = document.getElementById("attacker_is_crit");
atkCritSwitch.addEventListener("click", () => {
    atkCritSwitch.checked ? formState.attackCrit = true : formState.attackCrit = false;
    calculateDamage();
})
// Defend Crit
const defCritSwitch = document.getElementById("defender_is_crit");
defCritSwitch.addEventListener("click", () => {
    defCritSwitch.checked ? formState.defendCrit = true : formState.defendCrit = false;
    calculateDamage();
})
// Reset health boxes to 0 when clicked
document.getElementById("attacker_health").addEventListener("click", (event) => {
    event.target.value = "";
})
document.getElementById("defender_health").addEventListener("click", (event) => {
    event.target.value = "";
})
// If health boxes are null, go to 100
document.getElementById("attacker_health").addEventListener("blur", (event) => {
    if (event.target.value === "") {
        event.target.value = 100;
    }
})
document.getElementById("defender_health").addEventListener("blur", (event) => {
    if (event.target.value === "") {
        event.target.value = 100;
    }
})