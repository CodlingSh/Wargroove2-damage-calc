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
    let menu = isAttacking ? document.getElementById("attack_menu") : document.getElementById("defend_menu");
    
    

    // Readd class after 250ms
    setTimeout(() => {
        menu.classList.add("translate-y-offscreen");
    }, 100);
}

// Event handlers
document.getElementById("attacking_unit").addEventListener("click", () => {showMenu(true)});
document.getElementById("attack_menu_form").addEventListener("change", () => {updateForm(true)});