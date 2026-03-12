import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resuelve rutas de assets de `public/` respetando el base path de Vite.
 * En desarrollo: /assets/foo.png
 * En producción (GitHub Pages): /la-fogata-slides/assets/foo.png
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.replace(/^\//, "");
  return `${base}/${clean}`;
}
