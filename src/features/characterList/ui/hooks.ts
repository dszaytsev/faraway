import { useMemo } from "react"
import { useSearch } from "wouter/use-location"
import { FetchParams } from "../characterList"
import { getRouteState } from "../../routeState/routeStateController"
import { RouteState } from "../../routeState/routeState"

export function useCharacterListRouteState(): RouteState {
  const locationSearch = useSearch()

  return useMemo<FetchParams>(() => {
    return getRouteState(locationSearch)
  }, [locationSearch])
}
