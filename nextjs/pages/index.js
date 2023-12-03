import fs from "fs";
import path from "path";

import { useRef, useContext, useEffect } from "react";
import Head from "next/head";

import Home from "../components/Sections/Home/Home";
import About from "../components/Sections/About/About";
import Work from "../components/Sections/Work/Work";
import Blog from "../components/Sections/Blog/Blog";
import Contact from "../components/Sections/Contact/Contact";
import SectionContext from "../store/section-context";
import { getAllPosts } from "../util/posts";
import { getAboutJSONData } from "../util/about";

export default function HomePage({ aboutJSON, posts }) {
  const sectionContext = useContext(SectionContext);
  const sections = useRef();

  const activeSection =
    sectionContext.activeSection.charAt(0).toUpperCase() +
    sectionContext.activeSection.slice(1);

  useEffect(() => {
    if (sections) {
      sectionContext.setSections(sections.current);
    }
  }, [sections]);

  return (
    <>
      <Head>
        <title>{`Jagger Abney - ${activeSection}`}</title>
      </Head>
      <div ref={sections} className="sections">
        <Home />
        <About json={aboutJSON} />
        <Work />
        <Blog posts={posts} />
        <Contact />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/about`
  );
  const aboutJSON = await response.json();

  return {
    props: {
      aboutJSON,
      posts,
    },
  };
}
