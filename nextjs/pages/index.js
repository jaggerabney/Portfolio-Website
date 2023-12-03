import { useRef, useContext, useEffect } from "react";
import Head from "next/head";

import { MongoClient } from "mongodb";

import Home from "../components/Sections/Home/Home";
import About from "../components/Sections/About/About";
import Work from "../components/Sections/Work/Work";
import Blog from "../components/Sections/Blog/Blog";
import Contact from "../components/Sections/Contact/Contact";
import SectionContext from "../store/section-context";
import { getAllPosts } from "../util/posts";
import { capitalizeString } from "../util/string";

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

export async function getServerSideProps() {
  const blogPosts = getAllPosts();

  const client = await MongoClient.connect(process.env.DB_CONNECTION_STRING);
  const db = client.db("test");

  const aboutJSON = await db
    .collection("about")
    .findOne({}, { projection: { _id: 0 } });

  const workJSON = await db.collection("work").find().toArray();

  return {
    props: {
      aboutJSON, // parsing is not needed for aboutJSON because the _id is projected out
      workJSON: JSON.parse(JSON.stringify(workJSON)),
      blogPosts,
    },
  };
}
