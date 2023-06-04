import { FC } from "react"

import { Search } from "../features/routeState/components/Search"
import { CharacterList } from "../features/characterList/ui/CharacterList"
import { Box } from "@mui/material"

export const CharacterListPage: FC = () => {
  return (
    <div>
      <Search />

      <Box sx={{ mt: 4 }}>
        <CharacterList />
      </Box>
    </div>
  )
}
