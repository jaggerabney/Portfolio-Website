import Home from "../components/Sections/Home/Home";
import About from "../components/Sections/About/About";
import Work from "../components/Sections/Work/Work";
import Blog from "../components/Sections/Blog/Blog";
import Contact from "../components/Sections/Contact/Contact";
import { getAllPosts } from "../util/posts";

export default function HomePage({ posts }) {
  return (
    <div className="sections">
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
