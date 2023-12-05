const ACCESS_TOKEN =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzAxNzg1MjU3LjM4NjA2NCwiaWF0IjoxNzAxNjk4ODU3LjM4NjA2NCwianRpIjoiOFpIbDk0OUNTR01oRVA2MTYwbm80VmxfbHhDRVp3IiwiY2lkIjoiRlRvdFpvLW0wc2NKcUNEOGJfWnZMdyIsImxpZCI6InQyX2ExY3Q1ZDl5IiwiYWlkIjoidDJfYTFjdDVkOXkiLCJsY2EiOjE2MTE4MzYwMjEwMDAsInNjcCI6ImVKeUtWdEpTaWdVRUFBRF9fd056QVNjIiwiZmxvIjo5fQ.nO7VV0CkkWjX1AhBDSEwBNtCbOZGE7NfSZsoW8cUZFtg7f-JBl0JFvFlvmLLa5ArVoqiq4ASj1GwHZpBAfrgYSUQVw2TK10Bvygohqtc8xSNXq935rZsjROSKdOEe1x2AgCr_HCV2VogFc8bf6p-dwKf8mRnPBSUB-44PN3dSGdt27pWY4lyeZwt2HNqUJluo4V6l8fPcT7bsD8Zk8eKOyLCU__jRM7IzP8dlV5sF9rdXjNm2lIeUM2MZAsvi6KrIvtqjQjVSfCTs5themBXGDvA9gcWqkk-PqEqZ8qFzBvU6l7QLblBdBdF8z7g6X3c184a9PI2NEDs3R1KY6X1WQ";
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
