export type Pagination = {
  page: number
  perPage: number
}

export type FilterName = string
export type FilterValue = any

export type Filter = Record<FilterName, FilterValue>

export type GetListParams = {
  filter: Filter
  pagination: Pagination
  search: string
}
