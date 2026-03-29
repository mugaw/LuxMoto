export const getAssetPath = (path: string) => {
  if (path.startsWith('http')) return path;
  // Ensure the path doesn't start with a slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL;
  // Ensure baseUrl ends with a slash and starts with one
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${base}${cleanPath}`;
};
