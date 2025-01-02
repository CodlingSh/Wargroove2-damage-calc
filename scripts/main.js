import Unit, { units } from "./unit.js"
"use strict";

let formState = {} // Global object to keep track of the state of the form

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

    console.log("isUnit: " + isUnit);
    console.log("isAttacking: " + isAttacking);

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
        currSelectionImg.src = isAttacking ? "/assets/images/sprites/Cherrystone/" + selection + ".png" :  "/assets/images/sprites/Felheim/" + selection + ".png";
        if (isAttacking) formState.attackUnit = selection 
        else formState.defendUnit = selection;
    }
    else {
        currSelectionImg.src = "/assets/images/terrain/" + selection + ".png";
        if (isAttacking) formState.attackTerrain = selection.replace("/(sheild|danger)\d*/g", (match) => {
            console.log(match);
        })
        else formState.defendTerrain = Number(selection.replace("/sheild|danger/g", (match) => {
            if (match === "sheild") return "";
            if (match === "danger") return "-";
        })); 
    }

    console.log(formState);

    // Readd class after 250ms
    setTimeout(() => {
        menu.classList.add("translate-y-offscreen");
        console.log("time out set");
        console.log(menu);
    }, 100);
}

// Event handlers
// UNITS
document.getElementById("attacking_unit").addEventListener("click", () => {showMenu(true, true)});
document.getElementById("attack_menu_form").addEventListener("change", () => {updateForm(true, true)});
document.getElementById("defending_unit").addEventListener("click", () => {showMenu(true, false)});
document.getElementById("defend_menu_form").addEventListener("change", () => {updateForm(true, false)});
//TERRAINS
document.getElementById("attacking_env").addEventListener("click", () => {showMenu(false, true)});
document.getElementById("attack_terrain_menu").addEventListener("change", () => {updateForm(false, true)})
document.getElementById("defending_env").addEventListener("click", () => {showMenu(false, false)});
document.getElementById("defend_terrain_menu").addEventListener("change", () => {updateForm(false, false)})