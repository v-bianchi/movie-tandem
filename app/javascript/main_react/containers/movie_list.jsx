import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Movie from './movie'
import AddMovieForm from './add_movie_form'

import { fetchMovies } from '../actions'

class MovieList extends Component {

  componentDidUpdate(prevProps) {
    // Only fetch new movies array if NEW buddy is selected
    if(this.props.selectedWatchlist.id !== prevProps.selectedWatchlist.id ) {
      this.props.fetchMovies(this.props.selectedWatchlist.id, this.props.userData)
    }
  }

  render() {
    if(this.props.selectedWatchlist.id) {
      const otherPersonName = this.props.selectedWatchlist.user_1.id == this.props.userData.id
                            ? this.props.selectedWatchlist.user_2.first_name
                            : this.props.selectedWatchlist.user_1.first_name
      return (
        <div className="movie-list">
          <h3>This is your watchlist with {otherPersonName}</h3>
          <ul>
            {this.props.movies.map((movie, index) => {
              return (
                <Movie className="movie-list__item" key={index} movie={movie}/>
              )
            })}
          </ul>
          <AddMovieForm />
        </div>
      )
    } else {
      return (
        <div className="movie-list">
          <p>Select a buddy to view your watchlist with them</p>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    selectedWatchlist: state.selectedWatchlist,
    movies: state.movies,
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)