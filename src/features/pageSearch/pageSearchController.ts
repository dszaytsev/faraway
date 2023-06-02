import { changeUrlQueryParam } from "../../utils/urlQuery"

import { PAGE_SEARCH_PARAM_KEY } from "./pageSearch"

export function changeSearch(value: string): void {
  changeUrlQueryParam(PAGE_SEARCH_PARAM_KEY, value)
}
