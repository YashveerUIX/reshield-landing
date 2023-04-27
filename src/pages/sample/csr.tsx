import Link from "next/link";

import { useFetch } from "hooks";

type Item = {
  title: string;
};

interface Results {
  results: Array<Item>;
}

const Home = () => {
  const { data, error } = useFetch<Results>({
    url: "https://swapi.dev/api/films/",
  });

  if (error) return null;

  const results = data?.results;

  return (
    <main>
      <h1>The Starwars films</h1>
      <ul>
        {(results || []).map((item: Item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
      <Link href="/sample/ssr">SSR</Link>
    </main>
  );
};

export default Home;
