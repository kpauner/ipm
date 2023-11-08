const SPOTIFY_CLIENT_ID = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;

export default async function getAccessToken() {
  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(
        `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
      )}`,
    },
    body: "grant_type=client_credentials",
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.error) {
    console.error("Failed to obtain the access token");
    return null;
  }

  return tokenData;
}
