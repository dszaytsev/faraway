import { FC } from "react"
import { Character } from "../../../data/entities"
import { Box, IconButton, Typography } from "@mui/material"
import { Edit } from "@mui/icons-material"
import { useAppDispatch } from "../../../app/hooks"
import { characterDetailsActions } from ".."

type Props = {
  character: Character
}

type FieldProps = {
  title: string
  value: string
}

const CharacterField: FC<FieldProps> = ({ title, value }) => {
  return (
    <Box
      sx={{
        mb: 1,

        ":last-child": {
          mb: 0,
        },
      }}
    >
      <Typography variant="h6" component="h2">
        {title}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  )
}

export const CharacterDetails: FC<Props> = ({ character }) => {
  const dispatch = useAppDispatch()

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        onClick={() =>
          dispatch(characterDetailsActions.changeState("characterEditing"))
        }
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Edit />
      </IconButton>

      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        {character.name}
      </Typography>

      <CharacterField title="Birth Year" value={character.birth_year} />
      <CharacterField title="Gender" value={character.gender} />
      <CharacterField title="Eye Color" value={character.eye_color} />
      <CharacterField title="Hair Color" value={character.hair_color} />
      <CharacterField title="Height" value={character.height} />
      <CharacterField title="Mass" value={character.mass} />
      <CharacterField title="Skin Color" value={character.skin_color} />
    </Box>
  )
}
