import { useEffect, useState } from "react";
import styles from "./Search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9d54cf0c811c47599199c62820a6da3b"; // Use environment variables

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("chicken");
  const [isLoading, setIsLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(null); // To handle errors
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce logic: Update `debouncedQuery` after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // Adjust debounce delay as needed (500ms in this case)
    return () => clearTimeout(timer);
  }, [query]);

  // Fetch recipes when `debouncedQuery` changes
  useEffect(() => {
    async function fetchFood() {
      if (!debouncedQuery) {
        setFoodData([]); // Clear results if the query is empty
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `${URL}?query=${debouncedQuery}&apiKey=${API_KEY}`
        );
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        const data = await res.json();
        setFoodData(data.results || []); // Ensure data is an array
      } catch (err) {
        console.error(err);
        setError("Failed to fetch recipes. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchFood();
  }, [debouncedQuery]);

  return (
    <div className={styles.SearchContainer}>
      <input
        className={styles.inputs}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for a recipe"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
