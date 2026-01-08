export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
}

export interface CharactersResponse {
  info: {
    pages: number;
    count: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}
