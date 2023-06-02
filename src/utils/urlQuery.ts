export function changeUrlQuery(params: URLSearchParams): void {
  window.history.pushState(null, "", `?${params}`)
}

export function changeUrlQueryParam(key: string, value: string): void {
  const params = new URLSearchParams(window.location.search)
  params.set(key, value)
  changeUrlQuery(params)
}
