import React, { Component } from "react"
import { connect } from "react-redux"

import SuggestionsBox from './suggestions_box'

class AddMovieForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // The suggestions that match the user's input
      suggestions: [],
      // What the user has entered
      userInput: ""
    };
  }

  componentWillReceiveProps() {
    this.setState({
      suggestions: [],
      userInput: ""
    })
    document.getElementById('add-movie-input').value = ''
  }

  handleChange = (event) => {
    this.setState({ userInput : event.currentTarget.value})
    setTimeout(() => {
      if(this.state.userInput.length > 3) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${this.state.userInput}&page=1&include_adult=false`
        fetch(url)
          .then(response => response.json())
          .then((data) => {
            const suggestionsArray = data.results.slice(0, 4).map((elt) => ({
              title: elt.title,
              year: parseInt(elt.release_date.slice(0, 4), 10),
              overview: elt.overview,
              genre_ids: elt.genre_ids,
              poster_path: elt.poster_path
            }))
            this.setState({ suggestions: suggestionsArray})
          })
      }
    }, 100)
  }

  render() {
    return (
      <div className="add-movie-form">
        <input
          id="add-movie-input"
          className="form-control"
          type="text"
          placeholder="Add movie &#128270;"
          onChange={this.handleChange}
        />
        <SuggestionsBox suggestions={this.state.suggestions}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedWatchlist: state.selectedWatchlist,
    movies: state.movies,
    userData: state.userData
  }
}

export default connect(mapStateToProps, null)(AddMovieForm)