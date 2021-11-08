import Header from "../components/Header";

export function WithHeader({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export function WithoutHeader({ children }) {
  return <>{children}</>;
}
