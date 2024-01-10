import { useRef, useContext, useEffect } from "react";
import Head from "next/head";

import Home from "../components/Sections/Home/Home";
import About from "../components/Sections/About/About";
import Work from "../components/Sections/Work/Work";
import Blog from "../components/Sections/Blog/Blog";
import Contact from "../components/Sections/Contact/Contact";
import SectionContext from "../store/section-context";
import { capitalizeString } from "../util/string";
import { getAboutData, getWorkData, getBlogData } from "../util/db";

import classes from "../styles/Index.module.css";

export default function HomePage({ aboutJSON, workJSON, blogPosts }) {
  const sectionContext = useContext(SectionContext);
  const sections = useRef();

  const activeSection = capitalizeString(sectionContext.activeSection);

  useEffect(() => {
    sectionContext.setActiveSectionIndex(0);
    sectionContext.setActiveSection("home");
  }, []);

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
      <div ref={sections} className={classes.sections}>
        <Home />
        <About json={aboutJSON} />
        <Work json={workJSON} />
        <Blog posts={blogPosts} />
        <Contact />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const aboutJSON = await getAboutData();
  const workJSON = await getWorkData();
  const blogPosts = await getBlogData();

  return {
    props: {
      aboutJSON,
      workJSON,
      blogPosts
    }
  };
}
