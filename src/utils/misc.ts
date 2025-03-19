function isDev() {
  return process.env.NODE_ENV == "development";
}
function getGlobalShortCut() {
  return `meta + l`;
}

export { isDev, getGlobalShortCut };
