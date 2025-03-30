/**
 * The reducer function for managing the tally counter store
 * @param{Object} state - The current state
 * @param{Object} action - The action to process
 * @returns{Object} The updated state
 */

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };
    case 'SUBTRACT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}
export default reducer;
