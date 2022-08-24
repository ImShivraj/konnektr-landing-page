import type { NextPage } from "next";
import { Navbar, DrawerRight } from "../components/Navbar";
import Hero from "../containers/Hero/Hero";
import Earn from "../containers/Earn/Earn";

const Home: NextPage = () => {
  return (
    <div className="bg-themeBgDarkBlue3 overflow-x-hidden relative h-screen">
      <DrawerRight />
      <Navbar />
      <Hero />
      {/* <Earn /> */}
      {/* <div className="h-80" />  */}
    </div>
  );
};

export default Home;
