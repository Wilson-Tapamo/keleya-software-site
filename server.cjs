async function start() {
  const [{ access }, { join }] = await Promise.all([
    import("node:fs/promises"),
    import("node:path"),
  ]);
  const { startProdServer } = await import("vinext/server/prod-server");
  const port = Number.parseInt(process.env.PORT || "3000", 10);
  const outDir = join(__dirname, "dist");

  // Fail early when an incomplete archive was uploaded to o2switch.
  await Promise.all([
    access(join(outDir, "client", "keleya-mark-red.png")),
    access(join(outDir, "client", "keleya-mark-black.png")),
  ]);

  await startProdServer({
    port,
    host: "0.0.0.0",
    outDir,
  });
}

start().catch((error) => {
  console.error("Impossible de démarrer Keleya :", error);
  process.exitCode = 1;
});
