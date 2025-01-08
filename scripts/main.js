import Unit, { units } from "./unit.js"
"use strict";

let formState = {attackUnit: units.Soldier, defendUnit: units.Soldier, attackTerrain: 0, defendTerrain: 0} // Global object to keep track of the state of the form

/**
 * Function to show the menus. Basically just removes a tailwind class
 *
 * @param {bool} isUnit - Bool to determin if we are selecting unit menu or terrain menu
 * @param {bool} isAttacking - Bool to determin whether to show menu for attacking or defending player
 * @returns {null} Does not return anything
 * @example document.getElementById("attacking_unit").addEventListener("click", () => {showMenu(true, true)});
 */
function showMenu(isUnit, isAttacking) {
    let menu = null;
    
    if (isUnit) {
        menu = isAttacking ? document.getElementById("attack_menu") : document.getElementById("defend_menu");
    }
    else {
        menu = isAttacking ? document.getElementById("attack_terrain_menu") : document.getElementById("defend_terrain_menu");
    }

    // Remove translate class
    menu.classList.remove("translate-y-offscreen");
}

function updateForm(isUnit, isAttacking) {
    let menu = null;
    let currSelections = null;
    let currSelectionImg = null;
    let selection = null;
    let damageValues = null;
    
    if (isUnit) {
        menu = isAttacking ? document.getElementById("attack_menu") : document.getElementById("defend_menu");
        currSelections = isAttacking ? document.getElementsByName("attacker") : document.getElementsByName("defender");
        currSelectionImg = isAttacking ? document.getElementById("attacking_unit") : document.getElementById("defending_unit");
    } 
    else {
        menu = isAttacking ? document.getElementById("attack_terrain_menu") : document.getElementById("defend_terrain_menu");
        currSelections = isAttacking ? document.getElementsByName("attack_terrain") : document.getElementsByName("defend_terrain")
        currSelectionImg = isAttacking ? document.getElementById("attacking_env") : document.getElementById("defending_env");
    }

    // Check to see what unit is selected
    for (const currSelect of currSelections) {
        if (currSelect.checked) {
            selection = currSelect.id;
            break;
        }
    }

    // if defending, remove the "_d" at the end of ID
    if (isAttacking === false) {
        selection = selection.replace("_d", "");
    }

    // Update the GUI and update state
    if (isUnit) {
        let finalUnit = null;

        currSelectionImg.src = isAttacking ? "/assets/images/sprites/Cherrystone/" + selection + ".png" :  "/assets/images/sprites/Felheim/" + selection + ".png";
        // find Unit object for selection
        for (const [key] of Object.entries(units)) {
            if (units[key].name === selection) {
                console.log("UNIT ASSIGNED");
                finalUnit = units[key];
                break;
            } 
        }
        // assign to form state
        if (isAttacking) formState.attackUnit = finalUnit;
        else formState.defendUnit = finalUnit;
    }
    else {
        currSelectionImg.src = "/assets/images/terrain/" + selection + ".png";
        if (isAttacking) formState.attackTerrain = convertDefenceValue(selection);
        else formState.defendTerrain = convertDefenceValue(selection);
    }

    // console.log(formState);
    //console.log("formstate attacking unit: " + formState[attackUnit]);
    damageValues = calculateDamage(formState.attackUnit, formState.defendUnit, formState.attackTerrain, formState.defendTerrain);
    
    // Add Damage to form
    document.getElementById("attack_damage").innerHTML = damageValues[0] + "%";
    document.getElementById("defend_damage").innerHTML = damageValues[1] + "%";

    // Update results images
    document.getElementById("atk_result_img").src = "/assets/images/sprites/Cherrystone/" + formState.attackUnit.name + ".png";
    document.getElementById("def_result_img").src = "/assets/images/sprites/Felheim/" + formState.defendUnit.name + ".png";

    console.log(formState);
}

function hideMenu(e) {
    console.log(e.parentElement);
    setTimeout(() => {
        e.parentElement.parentElement.classList.add("translate-y-offscreen");
        console.log("e");
    }, 100);
}

function test() {
    console.log("This is firing from the function");
}

function convertDefenceValue(defenceString) {
    let value = Number(defenceString[defenceString.length - 1]);

    if (defenceString.startsWith("danger")) {
        value *= -1;
    }

    return value;
}

function calculateDamage(attackUnit, defenceUnit, attackTerrain, defenceTerrain) {
    let atkPower = attackUnit.damageMatrix[defenceUnit.name] === null ? 0 : attackUnit.damageMatrix[defenceUnit.name];
    let defPower = defenceUnit.damageMatrix[attackUnit.name] === null ? 0 : defenceUnit.damageMatrix[attackUnit.name];
    let atkHealth = Number(document.getElementById("attacker_health").value);
    let defHealth = Number(document.getElementById("defender_health").value);
    let atkCritical = 1;
    let defCritical = 1;
    let multiplier = 1;
    let atkDamage = null;
    let defDamage = null;

    console.log(`Attack Unit: ${attackUnit.name} \nDefence Unit: ${defenceUnit.name}`)

    console.log(`atkPower: ${atkPower} defPower: ${defPower} atkHealth: ${atkHealth} defHealth: ${defHealth} atkCritical: ${atkCritical} defCritical: ${defCritical} multiplier: ${multiplier} atkDamage: ${atkDamage} defDamage: ${defDamage}`);
    // Find the damage attacker will do to the enemy
    defDamage = Math.round(atkPower * atkCritical * atkHealth / 100 * multiplier * (1 - (defHealth / 100 * defenceTerrain / 10)));
    defHealth -= defDamage
    if (defHealth <= 0) {
        atkDamage = 0;
    }
    else {
        atkDamage = Math.round(defPower * defCritical * defHealth / 100 * multiplier * (1 - (atkHealth / 100 * attackTerrain / 10))); 
    }

    return [defDamage, atkDamage];
}

// Event handlers
// UNITS
document.getElementById("attacking_unit").addEventListener("click", () => {showMenu(true, true)});
document.getElementById("attack_menu_form").addEventListener("change", () => {updateForm(true, true)});
document.getElementById("defending_unit").addEventListener("click", () => {showMenu(true, false)});
document.getElementById("defend_menu_form").addEventListener("change", () => {updateForm(true, false)});
// TERRAINS
document.getElementById("attacking_env").addEventListener("click", () => {showMenu(false, true)});
document.getElementById("attack_terrain_menu").addEventListener("change", () => {updateForm(false, true)})
document.getElementById("defending_env").addEventListener("click", () => {showMenu(false, false)});
document.getElementById("defend_terrain_menu").addEventListener("change", () => {updateForm(false, false)})
// UNITS TO CLOSE
const attackUnitBtns = document.getElementById("attack_menu_form").querySelectorAll("label");
const defendUnitBtns = document.getElementById("defend_menu_form").querySelectorAll("label");
const attackTerrainBtns = document.getElementById("attack_terrain_form").querySelectorAll("label");
const defendTerrainBtns = document.getElementById("defend_terrain_form").querySelectorAll("label");
const btnArrays = [attackUnitBtns, defendUnitBtns, attackTerrainBtns, defendTerrainBtns];
console.log(attackUnitBtns);
btnArrays.forEach((btnArray) => {
    Array.from(btnArray).forEach((element) => {
        element.addEventListener("click", () => {
            hideMenu(element);
        });
    })
})