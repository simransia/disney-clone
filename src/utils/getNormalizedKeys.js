export const normalizeKeys = (movie) => {
  const normalizedMovie = {};
  for (let key in movie) {
    const normalizedKey = key.trim();
    normalizedMovie[normalizedKey] = movie[key];
  }
  return normalizedMovie;
};
