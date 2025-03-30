/** A redux inspired store implementation for the managing of a Tally Counter application
 * @param {Function} reducer - The reducer function handles state updates
 * @returns {Object} The store object with methods for state management
 */

function createStore(reducer) {
  let state = reducer(undefined, {}); //Initialising the state variable
  const listeners = []; //List/Array of subscribed listeners

  /**Returns the current state of the store
   * @returns {Object} Current state
   */
  function getState() {
    return state;
  }

  /**
   * Dispatches an action to update the store state
   * @param {Object} action - action to dispatch
   */

  function dispatch(action) {
    state = reducer(state, action); //Getting the new state after the action has been performed
    listeners.forEach((listener) => listener()); //Notify all listeners
  }

  /**
   * Subscribes a listener function to the store
   * @param {Function}listener - the function to be called whenever the state changes
   */

  function subscribe(listener) {
    listeners.push(listener);
  }
  return { getState, dispatch, subscribe };
}
export default createStore;
