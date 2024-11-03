import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './Reducer'; // Ensure this import is correct
import { initialState } from './initialState';

const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
