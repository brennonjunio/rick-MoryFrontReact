import { RouteObject } from "react-router-dom";
import { CharactersPage } from "@/modules/characters/pages/CharactersPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <CharactersPage />,
  },
];
