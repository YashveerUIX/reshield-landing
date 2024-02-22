## How to work with data fetching

This project is based on Next.js and provides the ability to run both SSR and CSR pages.
While data for most of the pages need to be fetched server side if we need to pre-render a page, we still can do basic data fetching like updation, search and other API activities in client side. Most of these are action based.

### Server side data fetching

For server side data fetching we will simply use `fetch` API which is already polyfilled by Next.js and we don't have to worry about importing it to use.
More on server side data fetching can be read here -

- data fetching inside [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) for Server Side Rendered pages whose data is needed on the run
- data fetching inside [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths) for Server Side Rendered pages whose paths are dynamically built and data is dynamically fetched
- data fetching inside [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) for Server Side Rendered pages whose data is fetched at build time and generally used for static pages which needs data refresh periodically.

### Client side data fetching

Now for Client Side data fetching we will use a custom made hook which takes care of multiple features.
We call it `useFetch`. `useFetch` is built on top of `useSWR` - a hook provided by Next.js itself for data fetching and storing with caching, revalidation and much more. We can read more about `useSWR` [here](https://swr.vercel.app/docs/data-fetching).

#### Usage of `useFetch`

```js
import { useFetch } from 'hooks';

const SampleComponent = () => {
  const { data, error } = useFetch({ url: '/api/getName' });

  if (error) return null;

  const { name } = data;
  return <h1>Hi, {name}</h1>;
};
```

To read more about how `useFetch` works and what features we can use from it, refer to the `useFetch` source file linked in the bottom. To know more about what configurations we can use in `useFetch` refer to the [official doc](https://swr.vercel.app/docs/getting-started) of `useSWR` hook provided by Next.js.

- More on `useFetch` - [link](../src/hooks/useFetch/useFetch.ts)
- More on client side data fetching - [link](../src/pages/sample/csr.tsx)
- More on server side data fetching - [link](../src/pages/sample/ssr.tsx)
