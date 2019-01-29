import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { addMovie } from '../actions'


class SuggestionsBox extends Component {

  render() {
    return (
      <div className="suggestions-box">
        {this.props.suggestions.map((suggestion, index) => {
          return (
            <div className="suggestions-box__item" key={index} suggestion={suggestion}>
              <p>
                <button className="btn btn-sm btn-success" onClick={() => this.props.addMovie(
                  suggestion,
                  this.props.selectedWatchlist.id,
                  this.props.userData
                )}>
                  Add
                </button>
                {suggestion.title} - {suggestion.year}
              </p>
            </div>
          )
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionsBox)