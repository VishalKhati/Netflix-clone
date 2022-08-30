export const getMovieStart = () => ({
  type: "GET_MOVIES_START",
});
export const getMovieSuccess = ( movies) => ({
  type: "GET_MOVIES_SUCCESS",
  payload:movies
});
export const getMovieFailure = () => ({
  type: "GET_MOVIES_FAILURE",
});

export const deleteMovieStart = () => ({
  type: "DELETE_MOVIE_START",
});
export const deleteMovieSuccess = ( id) => ({
  type: "DELETE_MOVIE_SUCCESS",
  payload:id
});
export const deleteMovieFailure = () => ({
  type: "DELETE_MOVIE_FAILURE",
});
