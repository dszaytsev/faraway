import { FC, memo, useCallback, useState } from "react"
import { Character } from "../../../data/entities"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useAppDispatch } from "../../../app/hooks"
import { getFieldTitleByKey } from "../helpers"
import { updateCharacter } from "../characterDetailsSlice"

type Props = {
  character: Character
  disabled: boolean
}

type ChangeHandler = (field: keyof Character, value: string) => void

type FieldProps = {
  name: keyof Character
  label: string
  value: string
  onChange: ChangeHandler
}

const EditField: FC<FieldProps> = memo(({ name, label, value, onChange }) => {
  return (
    <Box
      sx={{
        mb: 4,

        ":last-child": {
          mb: 0,
        },
      }}
    >
      <TextField
        fullWidth
        label={label}
        size="small"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </Box>
  )
})

type EditFieldName = keyof Omit<
  Character,
  "homeworld" | "films" | "species" | "starships" | "vehicles"
>
const FIELDS_TO_EDIT: EditFieldName[] = [
  "birth_year",
  "gender",
  "eye_color",
  "hair_color",
  "height",
  "mass",
  "skin_color",
]

export const EditCharacter: FC<Props> = ({ character, disabled = false }) => {
  const [localCharacter, setLocalCharacter] = useState(character)
  const dispatch = useAppDispatch()

  const handleFieldChange = useCallback<ChangeHandler>((field, value) => {
    setLocalCharacter((state) => {
      return { ...state, [field]: value }
    })
  }, [])

  return (
    <Box
      sx={{
        ...(disabled && {
          pointerEvents: "none",
          touchAction: "none",
          opacity: 0.7,
        }),
      }}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Edit: {character.name}
      </Typography>

      {FIELDS_TO_EDIT.map((field) => (
        <EditField
          key={field}
          name={field}
          label={getFieldTitleByKey(field)}
          value={localCharacter[field]}
          onChange={handleFieldChange}
        />
      ))}

      <Button
        sx={{ ml: "auto", display: "block" }}
        onClick={() => {
          dispatch(updateCharacter({ ...localCharacter }))
        }}
      >
        Save
      </Button>
    </Box>
  )
}
