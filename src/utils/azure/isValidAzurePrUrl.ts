export const isValidAzurePrUrl = (url: string) => {
  return url.includes('dev.azure.com') && url.includes('/pullrequest/')
}
