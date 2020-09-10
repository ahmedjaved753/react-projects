import React, { useReducer, createContext, useCallback } from 'react';
import id from 'uuid/v4';
import initialState from './initialState';

export const GrudgeContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_GRUDGE':
      return [action.payload, ...state];

    case 'TOGGLE_FORGIVENESS':
      return state.map(grudge => {
        if (grudge.id != action.payload.id) return grudge;
        return { ...grudge, forgiven: !grudge.forgiven };
      });
    case 'DELETE_GRUDGE':
      return state.filter(grudge => action.payload.id != grudge.id);

    default:
      return state;
  }
}

export default function GrudgeContextProvider({ children }) {
  const [grudges, dispatch] = useReducer(reducer, initialState);

  const addGrudge = useCallback(
    ({ person, reason }) =>
      dispatch({
        type: 'ADD_GRUDGE',
        payload: { person, reason, id: id(), forgiven: false }
      }),
    [dispatch]
  );

  const toggleForgiveness = useCallback(
    id => dispatch({ type: 'TOGGLE_FORGIVENESS', payload: { id } }),
    [dispatch]
  );

  const deleteGrudge = useCallback(
    id => dispatch({ type: 'DELETE_GRUDGE', payload: { id } }),
    [dispatch]
  );

  const value = { grudges, toggleForgiveness, deleteGrudge, addGrudge };

  return (
    <GrudgeContext.Provider value={value}>{children}</GrudgeContext.Provider>
  );
}
