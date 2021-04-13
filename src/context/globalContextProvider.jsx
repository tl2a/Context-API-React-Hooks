import React, {useReducer, createContext} from 'react'
import { titleReducer, titleState } from '../reducers/titleReducer';
import { bookReducer, bookState } from '../reducers/bookReducer';

export const globalContext = createContext();

const GlobalContextProvider = (props) => {
    const [titles, dispatch] = useReducer(titleReducer, titleState)
    return (
        <globalContext.Provider value={{titles, dispatch}}>
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalContextProvider
