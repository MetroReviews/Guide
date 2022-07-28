export type NPMDocument = {
  "dist-tags": {
    latest: string
  }
  "versions": {
    [version: string]: NPMDocument
  }
}

export const getNPMVersion = async (packageName: string): Promise<string> => {
  const res = await fetch(`https://registry.npmjs.org/metro-bots/${packageName}`);
  const json = await res.json();

  const {
    "dist-tags": {
      latest: latestVersion
    },
    error
  } = json;

  if (res.status === 200 && latestVersion) {
    return latestVersion;
  }

  throw new Error(error);
};


export const getAllVersions = async () => {
  const [
    metroTSAPI,
  ] = await Promise.all([
    getNPMVersion('metro-api')
  ])

  return {
    'metro-api': metroTSAPI
  }
}
