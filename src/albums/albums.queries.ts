export const albumQueries = {
  readAlbums: `
    SELECT 
      id as albumId, title, artist,
      description, year, image
    FROM albums
  `,

  readAlbumsByArtist: `
    SELECT 
      id as albumId, title, artist,
      description, year, image
    FROM albums
    WHERE artist = ?
  `,

  readAlbumsByArtistSearch: `
    SELECT 
      id as albumId, title, artist,
      description, year, image
    FROM albums
    WHERE artist LIKE ?
  `,

  readAlbumsByDescriptionSearch: `
    SELECT 
      id as albumId, title, artist,
      description, year, image
    FROM albums
    WHERE description LIKE ?
  `,

  readAlbumsByAlbumId: `
    SELECT 
      id as albumId, title, artist,
      description, year, image
    FROM albums
    WHERE id = ?
  `,

  createAlbum: `
    INSERT INTO albums(title, artist, description, year, image) 
    VALUES(?, ?, ?, ?, ?)
  `,

  updateAlbum: `
    UPDATE albums
    SET title = ?, artist = ?, year = ?, image = ?, description = ?
    WHERE id = ?
  `,

  deleteAlbum: `
    DELETE FROM albums
    WHERE id = ?
  `,
};
