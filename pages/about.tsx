import React from 'react';
import { NextPage } from 'next';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link from '../src/components/Link';

const Page: NextPage = () => (
  <main>
    <ManifestHead
      title="Nextjs Typescript Eslint"
      themeColor="red"
      hrefPage="/"
      hrefManifest="/static/manifest/manifest.json"
    />
    <span>This is about page</span>
    <br />
    <Link href="/" prefetch={false}>
      <a>index</a>
    </Link>
  </main>
);

export default Page;