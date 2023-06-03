import { FC, useEffect } from "react"

import { fetchCharacters } from "../features/characterList"

import { changeSearch } from "../features/routeState/pageSearch"
import { useCharacterListRouteState } from "../features/characterList/hooks"

import { goToPage } from "../features/routeState/pagination"
import { useAppDispatch, useAppSelector } from "../app/hooks"

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

  if (characterList.state === "loading") return <>"loading"</>

  return (
    <div>
      <button onClick={() => goToPage(routeState.pagination.page - 1)}>
        page prev
      </button>

      <button onClick={() => goToPage(routeState.pagination.page + 1)}>
        page next
      </button>

      <button onClick={() => changeSearch(Math.random() + "")}>
        change search
      </button>

      {JSON.stringify(characterList)}
    </div>
  )

  // return null
}
