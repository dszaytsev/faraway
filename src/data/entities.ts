export type Character = {
  id: string
  name: string
  height: number
  mass: number
  hairColor: string
  skinColor: string
  eyeColor: string
  birthYear: string
  gender: string
  homeworld: string

  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
}

export type Film = {
  id: string
  title: string
}

export type Species = {
  id: string
  name: string
}

export type Vehicle = {
  id: string
  name: string
}

export type Starship = {
  id: string
  name: string
}
