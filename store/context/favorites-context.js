import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  deleteFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function addFavorite(id) {
    setFavoriteIds((curr) => [...curr, id]);
  }

  function deleteFavorite(id) {
    setFavoriteIds((curr) => {
      return curr.filter((currId) => currId !== id);
    });
  }

  const value = {
    ids: favoriteIds,
    addFavorite: addFavorite,
    deleteFavorite: deleteFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
