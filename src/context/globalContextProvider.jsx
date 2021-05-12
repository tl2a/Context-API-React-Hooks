import React, {useReducer, createContext, useEffect} from 'react'
// import "regenerator-runtime/runtime.js";
// import combineReducers from 'react-combine-reducers';
import { titleReducer, titleState } from '../reducers/titleReducer';
import { bookReducer, bookState } from '../reducers/bookReducer';

export const globalContext = createContext();

// const [rootReducer, initialState] = combineReducers({
//     titles: [titleReducer, titleState],
//     books: [bookReducer, bookState]
// });

const combineReducers = (reducers) => {  
    return (state = {}, action) => {
      const newState = {};
      for (let key in reducers) {
        newState[key] = reducers[key](state[key], action);
      }
      return newState;
    }
}

const GlobalContextProvider = (props) => {
    const [state, dispatch] = useReducer(combineReducers({
        titles: titleReducer,
        books: bookReducer 
      }), { //combined states
          titles: titleState,
          books: bookState
      }, () => { // this third argument is an init funtion as to initial state at first time based on localstorage if available
        const localData = localStorage.getItem('state');
        return localData ? JSON.parse(localData) : [];
      });

    useEffect(() => {
      localStorage.setItem('state', JSON.stringify(state));
    }, [state]);

    return (
        <globalContext.Provider value={{state, dispatch}}>
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalContextProvider
