export const SET_SEARCHMOVIE = "SET_SEARCHMOVIE";

export const setMovie = (movie = []) => ({
  type: SET_SEARCHMOVIE,
  data: movie,
});

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCHMOVIE:
      return { ...state, movie: action.data };
    default:
      throw new Error();
  }
};
