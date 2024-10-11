// Search the Google Books API for books matching the search term and return the results.
// This endpoint accepts query parameters:
// - 'q' (required): The search term. If missing, the endpoint returns a 400 error.
// - 'startIndex' (optional): The index of the first result to return (default is 0).
// - 'maxResults' (optional): The maximum number of results to return (default is 10).
// - 'orderBy' (optional): The order in which results are sorted (default is 'relevance').
// The results are fetched from the Google Books API and returned as JSON.
// If an error occurs during the fetch, a 500 error is returned.

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
