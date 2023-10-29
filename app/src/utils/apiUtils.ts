import { ErrorMessages } from "../constants/errors/ErrorMessages";

const fetchData = async () => {
  const response = await fetch("http://localhost:3000/");
  if (!response.ok) {
    throw new Error(ErrorMessages.FailedToFetchData);
  }
  return response.json();
};

export default fetchData;
