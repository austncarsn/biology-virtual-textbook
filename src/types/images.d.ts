declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

// SVG imports are no longer used in the project; declaration removed to
// avoid accidental SVG module resolution. If you later add SVG imports,
// re-add this declaration block.
