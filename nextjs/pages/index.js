import { useEffect, useRef } from "react";

import Home from "../components/Sections/Home/Home";
import About from "../components/Sections/About/About";
import Work from "../components/Sections/Work/Work";
import Blog from "../components/Sections/Blog/Blog";
import Contact from "../components/Sections/Contact/Contact";
import useScrollPos from "../hooks/use-scroll-pos";
import { getAllPosts } from "../util/posts";
import { items } from "../components/Layout/Navbar/Navbar";

export default function HomePage({ posts }) {
  const scrollPos = useScrollPos();
  const sections = useRef();

  useEffect(() => {
    // const sectionHeight = document.getElementById("sections").offsetHeight / 5;
    const sectionHeight = sections.current.offsetHeight / 5;
    const sectionGap = getComputedStyle(sections.current)
      .getPropertyValue("gap")
      .match(/^[0-9]+$/);
    const sectionIndex =
      Math.floor(scrollPos / sectionHeight + 0.25) - Number(sectionGap);

    window.history.replaceState("", "", `/${items[sectionIndex]}`);
  }, [scrollPos]);

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
