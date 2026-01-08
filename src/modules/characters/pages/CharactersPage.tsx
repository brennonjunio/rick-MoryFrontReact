import {
  Button,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CharactersTable } from "../components/CharactersTable";
import { useCharacters } from "../hooks/useCharacters";

export function CharactersPage() {
  const {
    characters,
    loading,
    page,
    totalPages,
    search,
    changeSearch,
    nextPage,
    prevPage,
  } = useCharacters();

  return (
    <Container>
      <Stack spacing={2}>
        <Typography align="center" variant="h4">
          Rick and Morty Characters
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button variant="outlined" onClick={prevPage} disabled={page === 1}>
            Anterior
          </Button>

          <Typography>
            Página {page} de {totalPages}
          </Typography>

          <Button
            variant="outlined"
            onClick={nextPage}
            disabled={page === totalPages}
          >
            Próxima
          </Button>
        </Stack>

        <TextField
          label="Pesquisar personagem"
          value={search}
          onChange={(e) => changeSearch(e.target.value)}
          fullWidth
        />

        {loading ? <CircularProgress /> : <CharactersTable data={characters} />}
      </Stack>
    </Container>
  );
}
