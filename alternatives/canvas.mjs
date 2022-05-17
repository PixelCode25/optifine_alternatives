import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Canvas Renderer",
	"vram-guild",
	"A new rendering engine. Incompatible with Sodium.",
)
.icon("https://cdn.modrinth.com/data/VOYxIjFI/icon.jpg")
.add_version({id: 16, note: "Abandoned"}, 17, 18)
.add_category("Shaders")
.add_link(
	{ host: "curseforge", params: { namespace: "canvas-renderer" } },
	{ host: "modrinth" },
	{ host: "github" }
)
.provides("frapi");