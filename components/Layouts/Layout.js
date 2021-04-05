import Nav from "../Nav";
import Footer from "../Footer";

export default function Layout({ children, pageProps }) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Nav />
      <main className="flex-grow w-full mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
