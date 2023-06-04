import { FC, useEffect } from "react"

import { fetchCharacter } from "../features/characterDetails"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { CharacterDetails } from "../features/characterDetails/components/CharacterDetails"
import { CircularProgress, Paper, Stack } from "@mui/material"

type Props = {
  characterId: string
}

export const CharacterDetailsPage: FC<Props> = ({ characterId }) => {
  const dispatch = useAppDispatch()
  const characterDetails = useAppSelector((state) => state.characterDetails)

  useEffect(() => {
    const fetcher = dispatch(fetchCharacter(characterId))

    return () => {
      fetcher.abort()
    }
  }, [characterId, dispatch])

  return (
    <Paper
      sx={{
        py: 2,
        px: 4,
      }}
    >
      <Stack direction="row" justifyContent="center">
        {characterDetails.state === "loading" && <CircularProgress />}
        {characterDetails.state === "error" && <span>Error occurred</span>}
      </Stack>

      {characterDetails.state === "success" && (
        <CharacterDetails character={characterDetails.character} />
      )}
    </Paper>
  )
}
