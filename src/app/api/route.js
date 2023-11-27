import fetcher from "@/utils/ServerFetcher"

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const sortBy = searchParams.get('sortBy');
  const limit = searchParams.get('limit');
  const after = searchParams.get('after');

  const res = await fetcher(`${sortBy}/?limit=${limit}&after=${after}`)

  return Response.json(res)
}