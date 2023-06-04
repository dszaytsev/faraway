import { FC, useEffect } from "react"

import { Search } from "../features/routeState/components/Search"
import { CharacterList } from "../features/characterList/components/CharacterList"
import { Box } from "@mui/material"
import { useAppDispatch } from "../app/hooks"
import { characterListActions } from "../features/characterList"

export const CharacterListPage: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(characterListActions.destroy())
    }
  }, [dispatch])

  return (
    <div>
      <Search />

      <Box sx={{ mt: 4 }}>
        <CharacterList />
      </Box>
    </div>
  )
}
