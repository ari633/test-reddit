export const ClientFetcher = async (urls) => {
  return fetch(urls).then((res) => {
    if (res.status === 200) {
      return res.json();
    } 
    return {};
  }).then((res) => {
    return res;
  });
}