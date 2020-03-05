const getEnv = (name) => {
  if (!process.env[name]) {
    throw new Error(`${name} not found in environment`);
  }

  return process.env[name];
};

const wait = (ms) => new Promise(res => setTimeout(res, ms));

const getInvalidKey = (projectId) => `${projectId}/invalid`;
const getErrorKey = (projectId) => `${projectId}/error`;
const getWarnKey = (projectId) => `${projectId}/warn`;
const getInfoKey = (projectId) => `${projectId}/info`;

module.exports = {
  getEnv,
  wait,
  getInvalidKey,
  getErrorKey,
  getWarnKey,
  getInfoKey,
};
