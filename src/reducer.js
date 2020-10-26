export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finish developing
  // token:
  //   "BQBKwZGhoS2mpRWwb1ciLrA_g6RIvZak-NcXcKYC1i8zp8m2jQBY0lIUKBiUgVnKZmP1VnkvV-3XkCxuqUpXv2vemyT-HVEDf--bIXhkvgbnF3N-PSDsAeqysBj0TISHsu7STDBIm6KehViq4SOUqRILQI4k",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
