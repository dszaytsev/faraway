export function pushParamsToUrl(params: URLSearchParams): void {
  window.history.pushState(null, "", `?${params}`)
}

export function changeSearchParams(
  key: string,
  value: string,
): URLSearchParams {
  const params = new URLSearchParams(window.location.search)
  params.set(key, value)
  return params
}
