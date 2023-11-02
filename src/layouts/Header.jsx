import React from 'react'
import { MdBrightness2, MdBrightness7 } from "react-icons/md";
import './header.css'

export const Header = ({handleToggleDarkMode, darkMode}) => {
  return (
    <header>
      <section>
        <div>
          <h1>Notes List</h1>
        </div>
        <div>
          <button onClick={() => handleToggleDarkMode(!darkMode)}>
            {darkMode? <MdBrightness2 /> : <MdBrightness7/> }
          </button>
        </div>
      </section>
    </header>
  )
}
