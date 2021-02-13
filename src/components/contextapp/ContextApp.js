import React from 'react'
import AuthContextProvider from '../../contexts/AuthContext'
import BooksContextProvider from '../../contexts/BooksContext'
import ThemeContextProvider from '../../contexts/ThemeContext'
import BookList from './BookList'
import Navbar from './Navbar'
import ThemeToggle from './ThemeToggle'

export default function ContextApp() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Navbar />
        <BooksContextProvider>
          <BookList />
        </BooksContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </AuthContextProvider>
  )
}
