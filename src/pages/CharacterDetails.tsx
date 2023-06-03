import { FC, useEffect } from "react"

import { fetchCharacter } from "../features/characterDetails"
import { useAppDispatch, useAppSelector } from "../app/hooks"

type Props = {
  characterId: string
}

export const CharacterDetails: FC<Props> = ({ characterId }) => {
  const dispatch = useAppDispatch()
  const { state, character } = useAppSelector((state) => state.characterDetails)

  useEffect(() => {
    const fetcher = dispatch(fetchCharacter(characterId))

    return () => {
      fetcher.abort()
    }
  }, [characterId, dispatch])

  if (state === "loading") return <span>loading</span>

  return <div>{JSON.stringify(character)}</div>
}
