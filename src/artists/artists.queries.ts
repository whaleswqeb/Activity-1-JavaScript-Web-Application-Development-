export const artistQueries = {
  readArtists: `
    SELECT DISTINCT artist FROM albums
    ORDER BY artist
  `,
};
