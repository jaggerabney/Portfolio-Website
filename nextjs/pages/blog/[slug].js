import BlogDetail from "../../components/Sections/BlogDetail/BlogDetail";
import { getBlogPost, getBlogPostNames } from "../../util/DB.JS";

export default function BlogDetailPage({ post }) {
  return <BlogDetail post={post} />;
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const post = await getBlogPost(`blog/${slug}.md`);

  return {
    props: {
      post
    }
  };
}

export async function getStaticPaths() {
  const postFileNames = await getBlogPostNames();

  const paths = postFileNames.map((postSlug) => {
    const trimmedSlug = postSlug.substring(
      "/blog".length,
      postSlug.length - ".md".length
    );

    return {
      params: { slug: trimmedSlug }
    };
  });

  return {
    paths,
    fallback: false
  };
}
