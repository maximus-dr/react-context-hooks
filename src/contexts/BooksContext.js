import React, { createContext } from 'react'
import { useState } from 'react';

export const BooksContext = createContext();

export default function BooksContextProvider(props) {

  const [books, setBooks] = useState([
    {title: 'name of the wind', id: 1},
    {title: 'the way of kings', id: 2},
    {title: 'the final empire', id: 3},
    {title: 'the hero of ages', id: 4}
  ]);

  return (
    <BooksContext.Provider value={{books}}>
      {props.children}
    </BooksContext.Provider>
  )
}
