import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <div className={styles.Nav}>
        <div>
          <Link to="/About"><button>About</button></Link>
          <Link to="/Home"><button>Home</button></Link>
          <SearchBar onSearch={props.onSearch}/>
        </div>
    </div>
  )
}
