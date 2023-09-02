import Home from "../components/Sections/Home/Home";
import About from "../components/Sections/About/About";
import Work from "../components/Sections/Work/Work";
import Blog from "../components/Sections/Blog/Blog";
import { getAllPosts } from "../util/posts";

export default function HomePage({ posts }) {
  return (
    <div className="sections">
      <Home />
      <About />
      <Work />
      <Blog posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
