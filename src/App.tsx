import { Route, Link as RouterLink, Switch } from "wouter"

import { CharacterDetails } from "./pages/CharacterDetails"
import { CharacterListPage } from "./pages/CharacterList"
import { AppBar, Container, CssBaseline, Link, Toolbar } from "@mui/material"

function App() {
  return (
    <div className="App">
      <CssBaseline />

      <AppBar position="sticky" color="primary" sx={{ mb: 4 }}>
        <Toolbar>
          <RouterLink href="/">
            <Link color="white" variant="h5" underline="none">
              StarWars Characters
            </Link>
          </RouterLink>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="md">
        <Switch>
          <Route path="/">
            <CharacterListPage />
          </Route>

          <Route path="/character/:id">
            {(params) => <CharacterDetails characterId={params.id} />}
          </Route>

          <Route>404</Route>
        </Switch>
      </Container>
    </div>
  )
}

export default App
