import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <nav className={styles.Nav}>
          <div>
          <Link to="/"><button>LOGOUT</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/home"><button>Home</button></Link>
            <Link to="/favorites"><button>Favorites</button></Link>
          </div>
          <SearchBar onSearch={props.onSearch}/>
    </nav>
  )
}
