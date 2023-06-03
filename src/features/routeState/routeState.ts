import { Pagination } from "./pagination/pagination"

export type RouteState = {
  pagination: Pagination
  search: string
  filter: Record<string, string>
}
