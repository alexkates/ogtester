export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  console.log("url", url);

  return Response.json({ url });
}
