export const getIdFromUrl = (url: string): string => {
  const trimmed = url.replace(/\/$/, "")
  const idStartPosition = trimmed.lastIndexOf("/")

  return trimmed.substring(idStartPosition + 1)
}
