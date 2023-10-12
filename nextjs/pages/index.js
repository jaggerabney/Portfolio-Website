import { useRef, useContext, useEffect } from "react";

import Home from "../components/Sections/Home/Home";
import About from "../components/Sections/About/About";
import Work from "../components/Sections/Work/Work";
import Blog from "../components/Sections/Blog/Blog";
import Contact from "../components/Sections/Contact/Contact";
import SectionContext from "../store/section-context";
import { getAllPosts } from "../util/posts";

export default function HomePage({ posts }) {
  const sectionContext = useContext(SectionContext);
  const sections = useRef();

  useEffect(() => {
    if (sections) {
      sectionContext.setSections(sections.current);
    }
  }, [sections]);

  return (
    <div ref={sections} className="sections">
      <Home />
      <About />
      <Work />
      <Blog posts={posts} />
      <Contact />
    </div>
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
