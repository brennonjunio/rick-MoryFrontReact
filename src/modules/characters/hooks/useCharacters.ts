import { useEffect, useState } from "react";
import { Character } from "../types/character.types";
import { getCharacters } from "../api/characters.api";

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await getCharacters(page, search);
        if (!cancelled) {
          setCharacters(data.results);
          setTotalPages(data.info.pages);
        } 
      } catch {
        if (!cancelled) {
          setCharacters([]);
          setTotalPages(1);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [page, search]);

  function nextPage() {
    setPage((p) => Math.min(p + 1, totalPages));
  }

  function prevPage() {
    setPage((p) => Math.max(p - 1, 1));
  }

  function changeSearch(value: string) {
    setPage(1); 
    setSearch(value);
  }

  return {
    characters,
    loading,
    page,
    totalPages,
    search,
    changeSearch,
    nextPage,
    prevPage,
  };
}
