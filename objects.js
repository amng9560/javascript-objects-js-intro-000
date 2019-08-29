var playlist = new Object({beyonce: 'halo', adele: 'hello'});

 function updatePlaylist(playlist, artistName, songTitle) {
  playlist['singer'] = 'one punch'
  return playlist
}

 function removeFromPlaylist(playlist, artistName) {
  delete playlist[adele]
  return playlist
}
