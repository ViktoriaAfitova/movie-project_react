const useGenres = (selectedGenre) => {
  if (selectedGenre.length < 1)
    return '';

  const GenreIDs = selectedGenre.map((g) => g.id)
	return GenreIDs.reduce((acc, curr) => acc + ',' + curr)
}

export default useGenres;