export function getPageCount(perPage: number, itemCount: number): number {
  return Math.ceil(itemCount / perPage)
}
