const fetcher = async (params = 'new') => {
  const res = await fetch(`https://oauth.reddit.com/${params}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.REDDIT_ACCESS_TOKEN}`,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
};

export default fetcher;