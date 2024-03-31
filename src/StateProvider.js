//set up data layer

import React, { createContext, useContext, useReducer } from "react";

//we need this to track the basket
export const StateContext = createContext();
//BUILD A PROVIDER
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
//this is how we use inside of a component
export const useStateValue = () => useContext(StateContext); 