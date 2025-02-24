# Firebase onAuthStateChanged memory leak
This repository demonstrates a common issue with Firebase's `onAuthStateChanged` function: memory leaks due to unsubscribed listeners.

The `bug.js` file shows the problematic code where the unsubscribe function is never called.  The `bugSolution.js` demonstrates the correct way to handle unsubscribing.

## How to reproduce
1. Clone this repository.
2. Run `bug.js` and observe that a listener remains active even after the component unmounts, leading to memory leak.
3. Run `bugSolution.js` and observe that listener is removed correctly.

## Solution
Always unsubscribe from listeners when they are no longer needed, typically in component's `componentWillUnmount` lifecycle method, or when the authentication state is no longer relevant.