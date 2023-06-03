import { People, IPeople } from "swapi-ts"
import { GetListParams } from "../shared/types"
import { getIdFromUrl } from "./helpers"

type Person = IPeople & { id: string }

export async function getCharacters(params: GetListParams): Promise<{
  count: number
  result: Person[]
}> {
  try {
    const people = await People.find()

    const filteredResult = people.resources.filter((resource) => {
      const character = resource.value
      return character.name
        .toLowerCase()
        .includes(params.search.toLowerCase() ?? "")
    })

    const count = filteredResult.length

    const result = filteredResult
      .slice(
        (params.pagination.page - 1) * params.pagination.perPage,
        params.pagination.page * params.pagination.perPage,
      )
      .map(({ value }) => {
        return {
          id: getIdFromUrl(value.url),
          ...value,
        }
      })

    return { result, count }
  } catch {
    throw new Error("")
  }
}

export async function getCharacter(id: string): Promise<Person> {
  const url = `https://swapi.dev/api/people/${id}`

  try {
    const rawResult = await fetch(url, {
      headers: { accept: "application/json" },
    })
    const result: IPeople = await rawResult.json()
    return {
      id,
      ...result,
    }
  } catch {
    throw new Error("")
  }
}
