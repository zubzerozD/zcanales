import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config: any) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};

class VeliteWebpackPlugin {
  static started = false;
  apply(compiler: any) {
    // Ejecutar velite solo una vez en modo dev
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";

      // Usamos new Function para evitar que Next.js transpile el import
      const { build } = await (new Function('return import("velite")'))();

      await build({ watch: dev, clean: !dev });
    });
  }
}

export default nextConfig;