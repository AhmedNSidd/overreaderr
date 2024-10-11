// search google books api for books matching search term, return results
export async function GET(request: Request) {
  const params = new URLSearchParams(request.url.split('?')[1]);
  const term = params.get('q');
  const startIndex = params.get('startIndex') || 0;
  const maxResults = params.get('maxResults') || 10;
  const orderBy = params.get('orderBy') || 'relevance';

  let results;

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?key=${process.env.GOOGLE_BOOKS_API_KEY}&q=${term}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}`
    );
    results = await response.json();
  } catch (e) {
    console.error(e);
    return new Response('Error fetching results', { status: 500 });
  }

  return Response.json(results);
}
