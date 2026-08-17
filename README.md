# Florence Dafe Homepage

Source code for the website located at https://www.florencedafe.com/

## Developing

To start the dev server at http://localhost:8000 run

```shell
yarn develop
```

To check types without building, run

```shell
yarn typecheck
```

### Native dependencies

Yarn does not run package build scripts by default, so packages needing a native
build are listed explicitly under `dependenciesMeta` in `package.json`. If you add a
dependency that ships native code — `gatsby-plugin-sharp` and `gatsby-transformer-sharp`
are the likely candidates — add it there too, otherwise the build fails with a
"Something went wrong installing the ... module" error on a fresh install.

### External links in markdown

Links in markdown get `target` and `rel` attributes from
`plugins/gatsby-remark-external-link-attrs`, a small local plugin. It replaces the
unmaintained `gatsby-remark-external-links`; see the comment in that plugin for why
there is no maintained package to use instead.

## Deployment

The site is hosted on Cloudflare Pages and rebuilt automatically on every push to the
master branch. That connection lives in the Cloudflare dashboard (Workers & Pages →
the project → Settings → Git), not in this repository, so there is no deploy workflow
here to read. Custom domains are configured in the same project under Custom domains.

`yarn build` runs `tsc --noEmit` before `gatsby build`, so a type error fails the
Cloudflare build and the previously deployed version stays live. This holds only while
the project's build command is `yarn build` (Workers & Pages → the project → Settings →
Build); pointing it straight at `gatsby build` would skip the check.

The Node version used by the Cloudflare build comes from `.nvmrc`. Gatsby's `engines`
field allows `>=18 <26`. Yarn does not need pinning there: `.yarnrc.yml` points at the
release committed under `.yarn/releases`, so the build uses that version regardless of
what the build image provides.

The canonical hostname is `https://www.florencedafe.com`, which is what `siteUrl` in
`gatsby-config.ts` refers to.
