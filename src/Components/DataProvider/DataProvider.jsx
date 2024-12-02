import { createContext, useReducer } from "react";


// prepares the data 
export const DataContext=createContext()
// wrap our app and provide the data 
export const DataProvider=({children,reducer,initialState})=>{

return (
<DataContext.Provider value={useReducer(reducer,initialState)}>
{children}
</DataContext.Provider>
)
}

