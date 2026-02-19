export const trackQueries = {
  readTracks: `
    SELECT 
      id as trackId, album_id as albumId, title,
      number, video_url as video, lyrics
    FROM music.tracks
    WHERE album_id = ?
    ORDER BY number
  `,

  createTrack: `
    INSERT INTO music.tracks(album_id, title, number, video_url, lyrics)
    VALUES(?, ?, ?, ?, ?)
  `,

  updateTrack: `
    UPDATE music.tracks
    SET title = ?, number = ?, video_url = ?, lyrics = ?
    WHERE id = ?
  `,

  deleteTrack: `
    DELETE FROM music.tracks
    WHERE id = ?
  `,
};
