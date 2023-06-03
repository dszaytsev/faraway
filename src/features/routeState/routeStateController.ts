import { RouteState } from "./routeState"

import { getParamsFromSearch } from "./helpers"
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "./pagination/pagination"

export function getRouteState(locationSearch: string): RouteState {
  const { page, perPage, search, ...filter } =
    getParamsFromSearch(locationSearch)

  return {
    filter,
    pagination: {
      page: Number(page ?? DEFAULT_PAGE),
      perPage: Number(perPage ?? DEFAULT_PAGE_SIZE),
    },
    search: search,
  }
}
