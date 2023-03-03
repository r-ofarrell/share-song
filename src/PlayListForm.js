import React, { Component } from 'react'
import PlayList from './PlayList';

class PlayListForm extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className="container-fluid mt-3 px-2">
          <form>
            <div className="w-100 mb-3">
              <label htmlFor="user-name" className="form-label">User Name</label>
              <input type="text" className="form-control" id="user-name" onChange={this.props.handleUserName} value={this.props.newSong.userName}/>
            </div>
            <div className="w-100 mb-3">
              <label htmlFor="song-artist" className="form-label">Song Artist</label>
              <input type="text" className="form-control" id="song-artist" onChange={this.props.handleSongArtist} value={this.props.newSong.songArtist}/>
            </div>
            <div className="w-100 mb-3">
              <label htmlFor="song-title" className="form-label">Song Title</label>
              <input type="text" className="form-control" id="song-title" onChange={this.props.handleSongTitle} value={this.props.newSong.songTitle}/>
            </div>
            <div className="w-100 mb-3">
              <label htmlFor="song-notes" className="form-label">Song Notes</label>
              <textarea className="form-control" id="song-notes" onChange={this.props.handleSongNotes} value={this.props.newSong.songNotes}></textarea>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start">
              <button className="btn btn-primary" type="submit" onClick={this.props.submit}>Submit</button>
              <button className="btn btn-secondary mx-3" type="submit" onClick={this.props.reset}>Reset</button>
            </div>
          </form>
        </div>
          )
  }
}

export default PlayListForm;
