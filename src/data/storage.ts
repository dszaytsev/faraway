import { Character } from "./entities"

import * as charactersApi from "../api/characters"
import { GetListParams } from "../shared/types"

export type FilterName = string
export type FilterValue = any

export type Filter = Record<FilterName, FilterValue>

const LOCAL_STORAGE_KEY = "app.characters"

export async function getCharacters(params: GetListParams): Promise<{
  result: Character[]
  count: number
}> {
  const { result, count } = await charactersApi.getCharacters(params)

  return {
    count,
    result: result.map((person) => {
      const localPerson = getCharacterFromLocalStorage(person.id)

      return localPerson ?? person
    }),
  }
}

export async function getCharacter(characterId: string): Promise<Character> {
  const savedCharacter = getCharacterFromLocalStorage(characterId)

  if (savedCharacter) return savedCharacter

  const character = await charactersApi.getCharacter(characterId)

  saveCharacterToLocalStorage(character)

  return character
}

export async function setCharacter(character: Character): Promise<void> {
  await Promise.resolve()

  saveCharacterToLocalStorage(character)
}

function getCharacterFromLocalStorage(characterId: string): Character | null {
  const value = localStorage.getItem(getCharacterKey(characterId))

  if (!value) return null

  const character = JSON.parse(value)
  return { ...character }
}

function saveCharacterToLocalStorage(character: Character): void {
  localStorage.setItem(getCharacterKey(character.id), JSON.stringify(character))
}

function getCharacterKey(characterId: string) {
  return `${LOCAL_STORAGE_KEY}.${characterId}`
}
