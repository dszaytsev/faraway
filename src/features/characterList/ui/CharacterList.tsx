import { FC, useEffect } from "react"
import { useCharacterListRouteState } from "./hooks"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { fetchCharacters } from ".."
import { Stack, Typography } from "@mui/material"
import Paper from "@mui/material/Paper"
import { Character } from "../../../data/entities"
import { Link } from "wouter"
import { grey } from "@mui/material/colors"

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
  const characterList = useAppSelector((state) => state.characterList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetcher = dispatch(fetchCharacters(routeState))

    return () => {
      fetcher.abort()
    }
  }, [dispatch, routeState])

  return (
    <>
      <Stack spacing={2}>
        {characterList.characters.map((character) => (
          <CharacterItem character={character} key={character.id} />
        ))}
      </Stack>
    </>
  )
}
