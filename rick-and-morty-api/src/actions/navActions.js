export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_EPISODES = "GET_EPISODES";
export const GET_LOCATIONS = "GET_LOCATIONS";

export const getCharacters = () => {
  return {
    type: GET_CHARACTERS,
  };
};

export const getEpisodes = () => {
  return {
    type: GET_EPISODES,
  };
};

export const getLocations = () => {
  return {
    type: GET_LOCATIONS,
  };
};
