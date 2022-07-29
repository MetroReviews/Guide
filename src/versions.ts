export type NPMDocument = {
  'dist-tags': {
    latest: string
  }
  versions: {
    [version: string]: NPMDocument
  }
}

const versionOfMetroAPI = '0.1.0'

export const getNPMVersion = async (packageName: string): Promise<string> => {
  const res = await fetch(`https://registry.npmjs.org/${packageName}`)
  const json = await res.json()

  const {
    'dist-tags': { latest: latestVersion },
    error,
  } = json

  if (res.status === 200 && latestVersion) {
    return latestVersion
  }

  throw new Error(error)
}

export const getAllVersions = async () => {
  const [metroAPI] = await Promise.all([getNPMVersion('metro-sdk')])

  return {
    'metro-sdk': `v${metroAPI}`,
    'metro-api': `v${versionOfMetroAPI}`,
    construction: 'COMING SOON',
  }
}
