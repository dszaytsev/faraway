import { FC, useEffect } from "react"
import { useCharacterListRouteState } from "./hooks"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { fetchCharacters } from ".."
import { Box, CircularProgress, Stack, Typography } from "@mui/material"
import Paper from "@mui/material/Paper"
import { Character } from "../../../data/entities"
import { Link } from "wouter"
import { grey } from "@mui/material/colors"
import { Pagination } from "../../routeState/components/Pagination"

type CharacterItemProps = {
  character: Character
}

const CharacterItem: FC<CharacterItemProps> = ({ character }) => {
  return (
    <Link href={`/character/${character.id}`}>
      <Paper
        component="a"
        sx={{
          py: 1,
          px: 2,
          textDecoration: "none",

          ":hover": {
            backgroundColor: grey[200],
          },
        }}
      >
        <Typography variant="body1">{character.name}</Typography>
      </Paper>
    </Link>
  )
}

export const CharacterList: FC = () => {
  const routeState = useCharacterListRouteState()
  const { characters, state, totalCharacters } = useAppSelector(
    (state) => state.characterList,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetcher = dispatch(fetchCharacters(routeState))

    return () => {
      fetcher.abort()
    }
  }, [dispatch, routeState])

  const { pagination } = routeState

  return (
    <>
      {state === "loading" ? (
        <Stack direction="row" justifyContent="center">
          <CircularProgress />
        </Stack>
      ) : (
        <Stack spacing={2}>
          {characters.map((character) => (
            <CharacterItem character={character} key={character.id} />
          ))}
        </Stack>
      )}

      <Box sx={{ mt: 4 }}>
        <Pagination
          perPage={pagination.perPage}
          itemCount={totalCharacters}
          page={pagination.page}
          disabled={state === "loading"}
        />
      </Box>
    </>
  )
}
