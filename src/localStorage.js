// Inside of a componentDidMount function on the PlayList component
// You should have the following call to set the initial playlist.
// Don't worry much about how these work for now! Focus on placing
// them in the right locations and getting them to work properly.

// ******************************************************************************
// ******************************************************************************

// Copy and paste into componentDidMount in your PlayList component.

  const initSongs = [
    {
      title: 'The Twist',
      artist: 'Chubby Checker',
      notes: 'Great dance!',
      submitter: 'Top40Weekly'
    },
    {
      title: 'Smooth',
      artist: 'Santana ft. Rob Thomas',
      notes: 'From Matchbox 20 to Matchbox Sunny',
      submitter: 'Top40Weekly'
    },
    {
      title: 'Mack The Knife',
      artist: 'Bobby Darin',
      notes: 'Guess who\'s back in town?',
      submitter: 'Top40Weekly'
    }
  ];

  localStorage.setItem('songs', JSON.stringify(initSongs));
  this.setState({ songs: JSON.parse(localStorage.getItem('songs')) });

// ******************************************************************************
// ******************************************************************************

// Also in your PlayList component you should have a function that
// manually updates the playlist when a user presses a button. Use
// the following setState call to manually update your playlist.

  this.setState({ songs: JSON.parse(localStorage.getItem('songs')) });

// ******************************************************************************
// ******************************************************************************

// In your PlayListForm component you should have a handleSubmit function
// that happens when the form is submitted. This expression or method
// (depending on the syntax you choose) will be comparable to this:

  handleSubmit(e) {
    // Stop form submission!
    // Many browsers will reload the page if we forget this piece.
    e.preventDefault();

    // Get our current collection of songs.
    let currentSongs = JSON.parse(localStorage.getItem('songs') || '[]');

    // Add our song
    currentSongs.push({
      title: this.state.songTitle,
      artist: this.state.songArtist,
      notes: this.state.songArtist,
      submitter: this.state.userName
    });

    // Update the browser's LocalStorage with the new collection.
    localStorage.setItem('songs', JSON.stringify(currentSongs));

    // Reset the form's state for the next entry.
    this.setState({
      songTitle: '',
      songArtist: '',
      songNotes: '',
      userName: ''
    });
  }

//******************************************************************************
