const ACCESS_TOKEN =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzAxODM0MTY0LjQxNzM0MiwiaWF0IjoxNzAxNzQ3NzY0LjQxNzM0MiwianRpIjoiY2stWWV4Z2o2UXpiRjY0TmJPUWZvTzY4LW1fdS1BIiwiY2lkIjoiRlRvdFpvLW0wc2NKcUNEOGJfWnZMdyIsImxpZCI6InQyX2ExY3Q1ZDl5IiwiYWlkIjoidDJfYTFjdDVkOXkiLCJsY2EiOjE2MTE4MzYwMjEwMDAsInNjcCI6ImVKeUtWdEpTaWdVRUFBRF9fd056QVNjIiwiZmxvIjo5fQ.E2r39Rr6uvmu5XKnKqHGa3feNHGjGqBMi4jsf5g6IUlhIBJbzeh1f5oDTYlFT5DUENySoED0_t5nOYfnCxuwpQP1MqFkbtWAA6oiorvUZrPb7Bmg-g6ToE3eaZeukmyqtCSAFoZTBZnZdhe95iCOTRvONWT5UaqsA_g9UhGnergPijreDZCfvkCio0o9pxQ2eb9dtfI0LO9-48SvR9ajh_tGm2NGByRiU0inAN7kFCFeZtvXumnItdXuGEqh5b9TROlCd1H3TULXHkpiH8kGXnfQpWDzY-Sn-gmbTVVVW0KlGbDBP2fCIbYOT2dqWtS5JR9NtTO0-ecyQ5S37ZFqUw";
const fetcher = async (params = "new") => {
  const res = await fetch(`https://oauth.reddit.com/${params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${ACCESS_TOKEN}`,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default fetcher;
