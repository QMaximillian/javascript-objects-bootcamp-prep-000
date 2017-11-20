var playlist = {
  artist: song
}

function updatePlaylist (playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist (playlist, artist, song) {
  delete playlist[artist] = song
  return playlist
}
