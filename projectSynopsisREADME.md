# Approach:

I created a Redux-inspired store, the purpose of which is to manage the state of the counter in a Tally app.
The store supports the add (ADD), subtract (SUBTRACT) and reset (RESET) actions, logging the state of the store after each action
to demonstrate state management.

The store makes use of a simple reducer to update the state based off of the dispatched actions and allows listeners to observe state changes using
the observer pattern.

# Challenges and Solutions:

- Functional Programming: Ensures state immutability by returning new state objercts within the reducer to avoid side effects
- State Subscription: Listeners are notified every time the state changes, allowing the application to be scalable for UI updates - even though a UI/HTML file is not present (Console outpuit only)

# Key Concepts:

- State store: The createStore function encapsulates state management. It maintains an internal state and provides methods like getState, dispatch and subscribe to interact with state.
- Reducer: The reducer is a pure function that accepts the current state and an action and then returns a new state based on the action performed. This is where state updates occur.
- Actions: The action creators (ADD, SUBTRACT, RESET), return action objects. These actions represent the type of changes to be implemented on the state.
- Dispatching Actions: Calling dispatch with an action triggers the reducer to compute/discern the new state and the state is updated appropriately.
- Subscriptions: The subscribe method allows you to listen to state changes. Every time the state updates - after an action is dispatched - the listener function is invoked. Subsequent state update is logged to the console by the logger

# Key syntax learnings/takeaways:

- export default function: exports only a single entity from a module and allows for curly braces to not be required when importing them into - in this case - index.js
- export "\*" as actions from actions: performs the same as the above, but for multiple named functions/variables. It does so through the use of the wildcard syntax which imports them all as an object.
