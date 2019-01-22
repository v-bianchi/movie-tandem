import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { addMovie } from '../actions'

const titanicMovieObj = {
  title: "Titanic",
  year: "1997",
  genre: "Drama",
  overview: "84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning."
}
const matrixMovieObj = {
  title: "The Matrix",
  year: "1999",
  genre: "Action, Science fiction",
  overview: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth."
}

class AddMovieForm extends Component {

  handleSubmitTitanic = (event) => {
    event.preventDefault()
    this.props.addMovie(titanicMovieObj, this.props.selectedWatchlist.id, this.props.userData)
  }
  handleSubmitMatrix = (event) => {
    event.preventDefault()
    this.props.addMovie(matrixMovieObj, this.props.selectedWatchlist.id, this.props.userData)
  }

  render() {
    return (
      <div className="add-movie-form">
        <input type="text" placeholder="Add movie &#128270;" onChange={this.handleChange}/>
        {/* THIS IS TEMPORARY. TODO: ADD THEMOVIEDB INTEGRATION AND AUTOCOMPLETE */}
        <button onClick={this.handleSubmitTitanic}>Add Titanic</button>
        <button onClick={this.handleSubmitMatrix}>Add The Matrix</button>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedWatchlist: state.selectedWatchlist,
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieForm)