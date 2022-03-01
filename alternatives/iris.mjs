import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Iris",
	"IrisShaders",
	"A new shaders mod for Minecraft intended to be compatible with existing ShadersMod/Optifine shaders.",
)
.icon("https://cdn.modrinth.com/data/YL57xq9U/icon.webp")
.add_version(16, 17, 18)
.add_category("Shaders")
.add_link(
	{ host: "curseforge", params: { namespace: "irisshaders" } },
	{ host: "modrinth" },
	{ host: "github" },
);
