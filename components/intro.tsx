import { CMS_NAME } from "../lib/constants";
import Link from "next/link";

const Intro = () => {
  return (
    <section className="flex-col md:flex-column flex items-center mt-16">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mt-32">
        <img src="/assets/images/m.png" alt="meftun" style={{ display: "inline-block" }} />.
      </h1>
      <section className="flex-col md:flex-row flex items-center mt-8">
        <Link as={`/tr`} href="/main">
          <a className="hover:underline text-lg mr-8 ml-8">Turkish</a>
        </Link>
        <Link as={`/en`} href="/main">
          <a className="hover:underline text-lg mr-8 ml-8">English</a>
        </Link>
      </section>
    </section>
  );
};

export default Intro;
