import getAccessToken from "./getAccessToken";

export default async function fetchFromApi(url) {
  const tokenData = await getAccessToken();
  const accessToken = tokenData.access_token;

  if (!accessToken) {
    console.error("Failed to obtain the access token");
    throw new Error("Failed to obtain the access token");
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    console.error("Request failed with status:", response.status);
    throw new Error("Request failed");
  }

  return response.json();
}
