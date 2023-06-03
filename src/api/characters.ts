import { People, IPeople } from "swapi-ts"
import { GetListParams } from "../shared/types"

export async function getCharacters(params: GetListParams): Promise<{
  count: number
  result: IPeople[]
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
      .map((resource) => resource.value)

    return { result, count }
  } catch {
    throw new Error("")
  }
}
