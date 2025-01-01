import Unit, { units } from "./unit.js"
"use strict";

/**
 * Brief description of what the function does.
 *
 * @param {bool} isAttacking - bool to determin whether to show attacking or defending unit menu
 * @returns {null} Description of the return value.
 * @example
 * // Example usage of the function
 * menu.addEventListener("click", () => {showMenu(true)})
 */
function showMenu(isAttacking) {
    let menu = isAttacking ? document.getElementById("attack_menu") : document.getElementById("defend_menu");

    // Remove translate class
    menu.classList.remove("translate-y-offscreen");
}

function updateForm(isAttacking) {

   console.log(isAttacking)

    let menu = isAttacking ? document.getElementById("attack_menu") : document.getElementById("defend_menu");
    const currUnits = isAttacking ? document.getElementsByName("attacker") : document.getElementsByName("defender")
    const currUnitImg = isAttacking ? document.getElementById("attacking_unit") : document.getElementById("defending_unit");
    let selectedUnit = null;

    // Check to see what unit is selected
    for (const currUnit of currUnits) {
        if (currUnit.checked) {
            selectedUnit = currUnit.id;
            break;
        }
    }
    // if defending, remove the "_d" at the end of ID
    if (isAttacking === false) {
        selectedUnit = selectedUnit.replace("_d", "");
    }
    // Update the GUI
    currUnitImg.src = isAttacking ? "/assets/images/sprites/Cherrystone/" + selectedUnit + ".png" :  "/assets/images/sprites/Felheim/" + selectedUnit + ".png";

    console.log("Selected Unit: ", selectedUnit);

    // Readd class after 250ms
    setTimeout(() => {
        menu.classList.add("translate-y-offscreen");
        console.log("time out set");
        console.log(menu);
    }, 100);
}

function showTerrain(isAttacking) {
    let menu = isAttacking ? document.getElementById("attack_terrain_menu") : document.getElementById("defend_terrain_menu");
    
    // Remove translate class
    menu.classList.remove("translate-y-offscreen");
}

function updateTerrain(isAttacking) {
    let menu = isAttacking ? document.getElementById("attack_terrain_menu") : document.getElementById("defend_terrain_menu");
    const currTerrains = isAttacking ? document.getElementsByName("attack_terrain") : document.getElementsByName("defend_terrain")
    const currTerrainImg = isAttacking ? document.getElementById("attacking_env") : document.getElementById("defending_env");
    let selectedTerrain = null;

    console.log("isAttacking: " + isAttacking);

    for (const terrain of currTerrains) {
        if (terrain.checked) {
            selectedTerrain = terrain.id;
            console.log("terrain found")
            break;
        }
    }
    // If deneding remove the tail.
    if (isAttacking === false) {
        selectedTerrain = selectedTerrain.replace("_d", "");
    }
    // Update the GUI
    currTerrainImg.src = "/assets/images/terrain/" + selectedTerrain + ".png";

    console.log(selectedTerrain);

    // Readd class after 250ms
    setTimeout(() => {
        menu.classList.add("translate-y-offscreen");
    }, 100);
}

// Event handlers
// UNITS
document.getElementById("attacking_unit").addEventListener("click", () => {showMenu(true)});
document.getElementById("attack_menu_form").addEventListener("change", () => {updateForm(true)});
document.getElementById("defending_unit").addEventListener("click", () => {showMenu(false)});
document.getElementById("defend_menu_form").addEventListener("change", () => {updateForm(false)});
//TERRAINS
document.getElementById("attacking_env").addEventListener("click", () => {showTerrain(true)});
document.getElementById("attack_terrain_menu").addEventListener("change", () => {updateTerrain(true)})
document.getElementById("defending_env").addEventListener("click", () => {showTerrain(false)});
document.getElementById("defend_terrain_menu").addEventListener("change", () => {updateTerrain(false)})