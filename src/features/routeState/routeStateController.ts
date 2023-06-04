import { RouteState } from "./routeState"

import { getParamsFromSearch } from "./helpers"
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  PAGE_SIZES,
} from "./pagination/pagination"

export function getRouteState(locationSearch: string): RouteState {
  const {
    page,
    perPage: rawPerPage,
    search = "",
    ...filter
  } = getParamsFromSearch(locationSearch)

  const perPage = Number(rawPerPage)

  return {
    filter,
    pagination: {
      page: Number(page ?? DEFAULT_PAGE),
      perPage: PAGE_SIZES.includes(perPage) ? perPage : DEFAULT_PAGE_SIZE,
    },
    search,
  }
}
