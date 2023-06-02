import { changeUrlQueryParam } from "../../utils/urlQuery"
import { PAGE_PARAM_KEY, PER_PAGE_PARAM_KEY, Pagination } from "./pagination"
import { DEFAULT_PAGE_SIZE } from "./pagination"

export function getPaginationParams(): Pagination {
  const params = new URLSearchParams(window.location.search)
  return {
    perPage: Number(params.get(PER_PAGE_PARAM_KEY) ?? DEFAULT_PAGE_SIZE),
    page: Number(params.get(PAGE_PARAM_KEY) ?? 1),
  }
}

export function goToPage(page: number): void {
  changeUrlQueryParam(PAGE_PARAM_KEY, String(page))
}

export function goToNextPage(): void {
  const currentPage = getPaginationParams().page
  goToPage(currentPage + 1)
}

export function goToPrevPage(): void {
  const currentPage = getPaginationParams().page
  goToPage(currentPage - 1)
}
