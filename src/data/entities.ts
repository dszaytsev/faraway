import { IPeople } from "swapi-ts"

export type Character = Omit<IPeople, "created" | "edited"> & {
  id: string
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
