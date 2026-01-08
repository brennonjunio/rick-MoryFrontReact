import { Container } from "@mui/material";
import { Character } from "../types/character.types";

interface Props {
  data: Character[];
}

export function CharactersTable({ data }: Props) {
  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 57,
        
      }}
    >
      {data.map((character) => (
        <div
          key={character.id}
          style={{ border: "1px solid #ccc", padding: 10 }}
        >
          <img src={character.image} width={100} />
          <h4>{character.name}</h4>
          <p>{character.species}</p>
          <p>{character.gender}</p>

          <small>{character.status}</small>
        </div>
      ))}
    </Container>
  );
}
