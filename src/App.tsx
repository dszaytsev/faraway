import { useEffect } from "react"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"

import { fetchCharacters } from "./features/characterList"

function App() {
  const state = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const promise = dispatch(
      fetchCharacters({
        filter: {},
        pagination: {
          currentPage: 0,
          pageCount: 20,
          perPage: 10,
        },
        search: "",
      }),
    )

    return () => {
      promise.abort()
    }
  }, [])

  return <div className="App">{JSON.stringify(state)}</div>
}

export default App
