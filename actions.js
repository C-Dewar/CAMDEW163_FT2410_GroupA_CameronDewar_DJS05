/**
 * Action creator for adding to the count
 * @returns {Object} Action object to add to the count
 */

function add() {
  return { type: 'ADD' };
}

/**
 * Action creator for subtracting from the count
 * @returns {Object} Action object to subtract from the count
 */

function subtract() {
  return { type: 'SUBTRACT' };
}

/**
 * Action creator for reseting the count
 * @returns {Object} Action object to reset the count
 */

function reset() {
  return { type: 'RESET' };
}

export { add, subtract, reset };
