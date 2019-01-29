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
  
  componentWillUpdate() {
    $('.collapse').each(function() {$(this).collapse('hide')}) // collapse all movie info
  }

  render() {
    if(this.props.selectedWatchlist.id) {
      const otherPersonName = this.props.selectedWatchlist.user_1.id == this.props.userData.id
                            ? this.props.selectedWatchlist.user_2.name
                            : this.props.selectedWatchlist.user_1.name
      return (
        <div className="movie-list p-4">
          <h3 className="mb-4">Your watchlist with {otherPersonName}</h3>
          <ul className="list-unstyled">
            {this.props.movies.map((movie, index) => {
              return (
                <Movie className="" key={index} movie={movie}/>
              )
            })}
          </ul>
          <AddMovieForm />
        </div>
      )
    } else {
      let message = ''
      if (this.props.userData) {
        if (this.props.watchlists.length > 0) {
          message = <p>Select a friend to view your watchlist with them.</p>
        } else {
          message = <p>You don't have any watchlists yet! Click on 'Add new friend' to invite your buddy to start a watchlist with you.</p>
        }
      } else {
        message = <div>
                    <h2>Welcome to Movie Tandem!</h2>
                    <p>Log in or sign up to create watchlists with friends!</p>
                  </div>
      }
      return (
        <div className="movie-list p-4">
          {message}
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    watchlists: state.watchlists,
    selectedWatchlist: state.selectedWatchlist,
    movies: state.movies,
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)