import { createContext, useContext, useReducer } from "react";

//prepares the datalayer
export const StateContext = createContext();

//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information frm the dat layer
export const useStateValue = () => useContext(StateContext);
