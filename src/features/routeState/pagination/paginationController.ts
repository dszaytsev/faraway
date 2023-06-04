import { changeUrlQueryParam } from "../helpers"
import { PAGE_PARAM_KEY, PER_PAGE_PARAM_KEY } from "./pagination"

export function goToPage(page: number): void {
  changeUrlQueryParam(PAGE_PARAM_KEY, String(page))
}

export function changePerPage(perPage: number): void {
  changeUrlQueryParam(PER_PAGE_PARAM_KEY, String(perPage))
}
