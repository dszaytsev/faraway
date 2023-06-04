export type Pagination = {
  perPage: number
  page: number
}

export const PAGE_SIZES = [10, 20, 30]

export const DEFAULT_PAGE = 1
export const DEFAULT_PAGE_SIZE = PAGE_SIZES[0]

export const PAGE_PARAM_KEY = "page"
export const PER_PAGE_PARAM_KEY = "perPage"
