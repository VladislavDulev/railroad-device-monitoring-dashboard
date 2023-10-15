const fetchData = async () => {
  const response = await fetch("http://localhost:3000/");
  if (!response.ok) {
    throw new Error(
      "Failed to fetch data from the server. Please try again later."
    );
  }
  return response.json();
};

export default fetchData;
