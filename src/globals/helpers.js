import { createContext } from "react";

export const CollectionContext = createContext(null);

export const existingCollectionList = [
  {
    title: "Brand Collection",
    description:
      "List of all brands to inform users of the existing and available brands",
    stats: 33,
  },
  {
    title: "Influencer Collection",
    description:
      "List of all brands to inform users of the existing and available influencers",
    stats: 46,
  },
  {
    title: "Element Collection",
    description:
      "List of all elements for brands and users to inform users of collections of all elements available in store.",
    stats: 87,
  },
  {
    title: "Misc Collection",
    description:
      "List of all miscellaneous collections for brands and users to inform users of remaining collections",
    stats: 25,
  },
];
