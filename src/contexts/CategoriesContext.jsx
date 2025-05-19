// import React, { createContext, useState } from 'react';

// export const CategoriesContext = createContext();

// export const CategoriesProvider = ({ children }) => {
//   const [categories] = useState({
//     topRated: { title: "Blockbuster Movies", category: "top_rated" },
//     popular: { title: "Only on Netflix", category: "popular" },
//     upcoming: { title: "Upcoming", category: "upcoming" },
//     nowPlaying: { title: "Top Picks for You", category: "now_playing" }
//   });

//   return (
//     <CategoriesContext.Provider value={categories}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// }