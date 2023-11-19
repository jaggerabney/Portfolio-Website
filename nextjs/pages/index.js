import { useRef, useContext, useEffect } from "react";
import Head from "next/head";

import Home from "../components/Sections/Home/Home";
import About from "../components/Sections/About/About";
import Work from "../components/Sections/Work/Work";
import Blog from "../components/Sections/Blog/Blog";
import Contact from "../components/Sections/Contact/Contact";
import SectionContext from "../store/section-context";
import { getAllPosts } from "../util/posts";
import { useState } from "react";

export default function HomePage({ posts }) {
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
        <About />
        <Work />
        <Blog posts={posts} />
        <Contact />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
