import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "@material-tailwind/react";
import Events from "../components/Events";

export default function Home() {
  return (
    <>
      <body className="bg-gray-100 h-screen w-3/4 mx-auto">
        <Head>
          <title>Ticket Online Buy Now!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider>
          <Header title="Welcome to my app!" />
          <main>
            <div className="grid grid-cols-3">
              <Events />
            </div>
          </main>
        </ThemeProvider>
        <Footer />
      </body>
    </>
  );
}
