import { FC } from "react"
import { Input, InputAdornment } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"
import { debounce } from "lodash"
import { changeSearch } from "../pageSearch"
import { getRouteState } from "../routeStateController"
import { goToPage } from "../pagination"

export const Search: FC = () => {
  const defaultValue = getRouteState(window.location.search).search

  return (
    <Input
      onChange={debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        changeSearch(event.target.value)
        goToPage(1)
      }, 500)}
      defaultValue={defaultValue}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
      fullWidth
    />
  )
}
