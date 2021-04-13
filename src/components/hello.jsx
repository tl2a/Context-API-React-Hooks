import React, {useContext} from 'react'
import { globalContext } from '../context/globalContextProvider'

const Hello = () => {
    const { state, dispatch } = useContext(globalContext)
    const { titles, books } = state
    return (
        <div>
          The Titles ({titles.length}) :
          <ul>
            {titles.map(title => <li onClick={() => dispatch({type: 'Remove Title', id: title.id})} key={title.id}>{title.title}</li>)}
          </ul>
          <button onClick={() => dispatch({type: 'Add Title', title: 'The R'})}>Add Title</button>

          <br />

          The Books ({books.length}) :
          <ul>
            {books.map(book => <li onClick={() => dispatch({type: 'Remove Book', id: book.id})} key={book.id}>{book.book}</li>)}
          </ul>
          <button onClick={() => dispatch({type: 'Add Book', book: 'The R'})}>Add Book</button>

        </div>
    )
}

export default Hello
