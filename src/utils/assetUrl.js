/**
 * Utility to resolve public asset URLs dynamically based on Vite's base path.
 * Ensures images and videos work seamlessly on GitHub Pages subpaths (/Prototype/)
 * as well as custom domains and local development environments.
 */
export function assetUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}
