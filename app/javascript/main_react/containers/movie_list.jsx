import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

class MovieList extends Component {

  onItemClick = (event) => {
    event.currentTarget.querySelector('.movie-list__item-info').classList.toggle('hidden');
  }

  render() {
    return (
      <div className="movie-list">
        <h3>This is your watchlist with {this.props.selectedWatchlist.user_2.first_name}</h3>
          {this.props.movies.map((movie, index) => {
            return (
              <ul key={index} movie={movie}>
                <li className="movie-list__item" onClick={this.onItemClick}>
                  <p><strong>{movie.title}</strong></p>
                  <div className="movie-list__item-info hidden">
                    <p>{movie.year}</p>
                    <p><em>{movie.genre}</em></p>
                    <p>{movie.overview}</p>
                  </div>
                </li>
              </ul>
            )
          })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedWatchlist: state.selectedWatchlist,
    movies: state.movies
  }
}

// export default MovieList
export default connect(mapStateToProps, null)(MovieList)