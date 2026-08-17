/**
 * Ambient declarations for static assets imported through Gatsby's webpack
 * url-loader/file-loader pipeline. Each import resolves to the emitted public URL.
 */
declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

/** Stylesheets are pulled in as side-effect imports and emit no runtime value. */
declare module '*.css';
