function getEnvVariable(variableName: string, defaultValue: string): string {
  const envVariable = process.env[variableName];

  if (envVariable !== undefined) {
    return envVariable;
  }

  return defaultValue;
}

const config = {
  URL_ENDPOINT: getEnvVariable('VUE_APP_URL_ENDPOINT', 'http://localhost:8000/teas'),
};

export default config;
