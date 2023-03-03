import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import PlayListForm from './PlayListForm'
import NavBar from './Navigation'
import PlayList from './PlayList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: "",
      songsList: [],
    }

    this.handleUserNameChange = this.handleUserNameChange.bind(this)
    this.handleSongArtistChange = this.handleSongArtistChange.bind(this)
    this.handleSongTitleChange = this.handleSongTitleChange.bind(this)
    this.handleSongNotesChange = this.handleSongNotesChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleUserNameChange(e) {
    const newUserName = e.target.value
    this.setState({userName: newUserName})
  }

  handleSongArtistChange(e) {
    const newSongArtist = e.target.value
    this.setState({songArtist: newSongArtist})
  }

  handleSongTitleChange(e) {
    const newSongTitle = e.target.value
    this.setState({songTitle: newSongTitle})
  }

  handleSongNotesChange(e) {
    const newSongNotes = e.target.value
    this.setState({songNotes: newSongNotes})
  }

  handleSubmit(e) {
    e.preventDefault()
    const updatedSongList = this.state.songsList
    const newSong = {
      songArtist: this.state.songArtist,
      songTitle: this.state.songTitle,
      songNotes: this.state.songNotes,
      userName: this.state.userName
    }
    updatedSongList.push(newSong)

    this.setState({
      songArtist: "",
      songTitle: "",
      userName: "",
      songNotes: "",
      songsList: updatedSongList
    })
  }

  handleReset(e) {
    e.preventDefault()
    this.setState({
      songArtist: "",
      songTitle: "",
      userName: "",
      songNotes: "",
      songsList: []
    })
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <NavBar />
        <div className="d-flex flex-md-row flex-column bg-light px-3">
          <div className="container-fluid mt-3">
            <PlayListForm newSong={this.state} handleSongArtist={this.handleSongArtistChange} handleSongTitle={this.handleSongTitleChange} handleUserName={this.handleUserNameChange} handleSongNotes={this.handleSongNotesChange} submit={this.handleSubmit} reset={this.handleReset}/>
          </div>
          <div className="container-fluid mt-3">
            <h4 className="text-center">Playlist</h4>
            <PlayList songs={this.state.songsList}/>
          </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </div>
    )
  }
}

export default App;
