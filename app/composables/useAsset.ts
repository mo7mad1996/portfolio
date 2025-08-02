export const useAsset = async (path: string) => {
  // Handle ~/assets/ paths by importing them as modules
  if (path.startsWith("~/assets/")) {
    // Remove the ~/ prefix and return the path for dynamic import
    const assetPath = path.replace("~/", "");

    // In Nuxt 4, we need to use dynamic imports for assets
    // This will be resolved by Vite's asset handling
    try {
      // For images in assets, we need to use import.meta.glob or direct imports
      // Since we can't use top-level await in composables, we'll use a different approach
      const modules = import.meta.glob("~/assets/**/*", {
        query: "?url",
        import: "default",
        eager: false,
      });

      const fullPath = `/${assetPath}`;

      if (modules[fullPath]) {
        if (modules[fullPath]) {
          const load = modules[fullPath] as () => Promise<string>;
          return await load();
        }
      }

      console.warn("Asset not found:", path);
      return path;

      // Fallback: construct the path manually
      // Vite will handle this during build
      return new URL(`../${assetPath}`, import.meta.url).href;
    } catch (error) {
      console.error("error:", error);
      return path;
    }
  }

  return path;
};
