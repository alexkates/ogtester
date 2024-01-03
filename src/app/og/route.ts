export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) return Response.json({ error: "Missing url" }, { status: 400 });

  const headResponse = await fetch(url);

  if (!headResponse.ok)
    return Response.json({ error: "Invalid url" }, { status: 400 });

  const text = await headResponse.text();
  const ogTags = text.match(/<meta[^>]+>/g);

  return Response.json({ ogTags });
}
