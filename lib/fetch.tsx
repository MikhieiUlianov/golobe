export default async function Fetch(endpoint: string) {
  const response = await fetch(`http://localhost:3001/${endpoint}`);

  if (!response.ok) {
    throw new Error("Fetchind data error");
  }
  const data = response.json();
  return data;
}
