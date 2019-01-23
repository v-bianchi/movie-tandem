import React from "react"

import SideNav from '../containers/side_nav'
import MovieList from '../containers/movie_list'

const App = () => {
  return (
    <div className="main-content d-flex flex-column flex-sm-row">
      <SideNav />
      <MovieList />
    </div>
  )
}

export default App
