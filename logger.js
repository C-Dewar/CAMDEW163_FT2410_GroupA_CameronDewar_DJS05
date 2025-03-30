/**
 * Logs the state to the console whenever it changes
 * @param{Function} getState - The function to get the current state
 */
function logger(getState) {
  console.log('State updated:', getState());
}

export default logger;
