import { Route, Switch } from "wouter"

import { CharacterDetails } from "./pages/CharacterDetails"
import { CharacterList } from "./pages/CharacterList"

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <CharacterList />
        </Route>

        <Route path="character/:id">
          <CharacterDetails />
        </Route>

        <Route>404</Route>
      </Switch>
    </>
  )
}

export default App
