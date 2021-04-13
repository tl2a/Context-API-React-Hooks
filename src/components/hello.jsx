import React, {useContext} from 'react'
import { globalContext } from '../context/globalContextProvider'

const Hello = () => {
    const { titles, dispatch } = useContext(globalContext)
    return (
        <div>
          The Titles ({titles.length}) :
          <ul>
            {titles.map(title => <li onClick={() => dispatch({type: 'Remove Title', id: title.id})} key={title.id}>{title.title}</li>)}
          </ul>

          <button onClick={() => dispatch({type: 'Add Title', title: 'The R'})}>Add Title</button>

        </div>
    )
}

export default Hello
