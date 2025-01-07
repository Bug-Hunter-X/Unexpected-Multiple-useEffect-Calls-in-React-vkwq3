# Unexpected Multiple useEffect Calls in React

This repository demonstrates a common issue in React where the `useEffect` hook runs multiple times unexpectedly, even when using an empty dependency array. This often stems from closures capturing variables that change between renders.

## Bug Description

The `bug.js` file contains a `MyComponent` that uses `useEffect` with an empty dependency array.  Despite this, the effect logs multiple times to the console. The expected behavior is a single log on mount and a single cleanup log on unmount.

## Solution

The `bugSolution.js` file demonstrates how to resolve the issue by correctly managing variables within the `useEffect` closure.  This fix ensures the effect runs only once as intended.

## How to reproduce the bug

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Observe the console logs. You'll see multiple log messages indicating unintended runs of the useEffect hook.  

## How the solution works

The solution modifies the `useEffect` implementation to ensure proper handling of state variables within the closure. This prevents unintended re-renders or executions of the effect. 