import { getStore } from "@netlify/blobs";
const KINDS = ["requisiciones", "comprobaciones"];
export default async (req) => {
  const url = new URL(req.url);
  const kind = url.pathname.split("/")[2];
  if (!KINDS.includes(kind)) return new Response("No encontrado", { status: 404 });
  const s = getStore(kind), id = url.searchParams.get("id");
  if (req.method === "GET") {
    if (id) return Response.json(await s.get(id, { type: "json" }));
    const { blobs } = await s.list();
    const all = await Promise.all(blobs.map((b) => s.get(b.key, { type: "json" })));
    return Response.json(all.filter(Boolean));
  }
  if (req.method === "POST") {
    const b = await req.json();
    if (!b.id) return Response.json({ error: "id requerido" }, { status: 400 });
    await s.setJSON(b.id, b);
    return Response.json(b);
  }
  if (req.method === "DELETE" && id) { await s.delete(id); return Response.json({ ok: 1 }); }
  return new Response("Método no permitido", { status: 405 });
};
export const config = { path: "/api/*" };
