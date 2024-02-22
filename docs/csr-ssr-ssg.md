## Client Side Rendering(CSR)

This app can be loaded client side when SEO or indexing is not needed. The first page will be served from the server with basic html and dynamic data will be genrated clinet side. For this purpose we can use usual React hook - `useEffect` to fetch data upon component mounting.
Read official doc to learn more about [client side data](https://nextjs.org/docs/basic-features/data-fetching/client-side) fetching in Next.js.

> **_NOTE:_** We cannot use any sever side Next.js utility functions(`getServerSideProps`, `getStaticProps`, `getStaticPaths` etc.) if we want to completely serve all the data client side.
> We will include some custom ESLint rules in future which can be flag enabled and will restrict uses of these functions.

We can use dynamic import of a component and not include it in SSR while doing so using `dynamic`

```js
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicHeader = dynamic(() => import('../components/header'), {
  ssr: false,
});

export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicHeader />
    </Suspense>
  );
}
```

Read the details in the [official doc](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr).

## Static Site Generation(SSG)

Read [Next.js official documentation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended).

## Server Side Rendering(SSR) and data fetching

Read [Next.js official documentation](https://nextjs.org/docs/basic-features/pages#server-side-rendering)
