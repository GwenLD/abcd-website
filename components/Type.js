export function Heading1({ children }) {
  return (
    <h1 className="mb-3 text-2xl md:text-8xl font-abcdheading">
      {children}
    </h1>
  );
}

export function Heading2({ children }) {
  return <h2 className="mb-3 text-xl md:text-4xl font-abcdheading">{children}</h2>;
}

export function Heading3({ children }) {
  return (
    <h3 className="text-2xl mb-3 text-blue-400">{children}</h3>
  );
}

export function Paragraph({ children }) {
  return <p className="mb-4 text-justify">{children}</p>;
}
