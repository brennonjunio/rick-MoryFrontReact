import { http } from "@/shared/services/http";
import { CharactersResponse } from "../types/character.types";

export async function getCharacters(page = 1, search = "") {
  const params = new URLSearchParams();
  params.append("page", String(page));

  if (search) {
    params.append("name", search);
  }

  const response = await http.get(`/character?${params.toString()}`);
  return response.data;
}

export async function getCharactersByName(name:string) {
  const response = await http.get<CharactersResponse>(
    `/character?name=${name}`
  );
  return response.data;
}