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

function updateForm(isUnit, isAttacking) {
    if (isUnit) {
        let menu = isAttacking ? document.getElementById("attack_menu") : document.getElementById("defend_menu");
        const currSelections = isAttacking ? document.getElementsByName("attacker") : document.getElementsByName("defender");
        const currSelectionImg = isAttacking ? document.getElementById("attacking_unit") : document.getElementById("defending_unit");
    } 
    else {
        let menu = isAttacking ? document.getElementById("attack_terrain_menu") : document.getElementById("defend_terrain_menu");
        const currSelections = isAttacking ? document.getElementsByName("attack_terrain") : document.getElementsByName("defend_terrain")
        const currSelectionImg = isAttacking ? document.getElementById("attacking_env") : document.getElementById("defending_env");
    }
    
    let selection = null;

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
    // Update the GUI
    currSelectionImg.src = isAttacking ? "/assets/images/sprites/Cherrystone/" + selectedUnit + ".png" :  "/assets/images/sprites/Felheim/" + selectedUnit + ".png";

    console.log("Selected Unit: ", selection);

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

// Event handlers
// UNITS
document.getElementById("attacking_unit").addEventListener("click", () => {showMenu(true, true)});
document.getElementById("attack_menu_form").addEventListener("change", () => {updateForm(true, true)});
document.getElementById("defending_unit").addEventListener("click", () => {showMenu(true, false)});
document.getElementById("defend_menu_form").addEventListener("change", () => {updateForm(true, false)});
//TERRAINS
document.getElementById("attacking_env").addEventListener("click", () => {showTerrain(false, true)});
document.getElementById("attack_terrain_menu").addEventListener("change", () => {updateTerrain(false, true)})
document.getElementById("defending_env").addEventListener("click", () => {showTerrain(false, false)});
document.getElementById("defend_terrain_menu").addEventListener("change", () => {updateTerrain(false, false)})