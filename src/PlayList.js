import React, { Component } from 'react'
// import PlayListItem from './PlayListItem'

class PlayList extends Component {
  constructor(props) {
    super(props)

    this.MakePlayListItems = this.MakePlayListItems.bind(this);
  }

  MakePlayListItems() {
    const PlayListItems = this.props.songs.map(song => {
      return (
        <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Title: {song.songTitle}</h5>
              <h5 className="card-title">Artist: {song.songArtist}</h5>
              <p className="card-text mb-0">Notes: {song.songNotes}</p>
              <p className="card-text mb-0">Submitted by: {song.userName}</p>
            </div>
        </div>
      )
    });

    if (PlayListItems) {
      return (
        <div>
          {PlayListItems}
        </div>
      )
    };

    return <div></div>
  }

  render() {
    return (
    <div>
      <this.MakePlayListItems />
    </div>
    )
  }
}

export default PlayList;
