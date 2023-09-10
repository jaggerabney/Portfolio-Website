import BlogDetail from "../../components/Sections/BlogDetail/BlogDetail";
import { getAllPostFileNames, getPostData } from "../../util/posts";

export default function BlogDetailPage({ post }) {
  return <BlogDetail post={post} />;
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
  };
}

export function getStaticPaths() {
  const postFileNames = getAllPostFileNames();

  const slugs = postFileNames.map((fileName) => {
    const trimmedFileName = fileName.replace(/\.md$/, "");

    return {
      params: { slug: trimmedFileName },
    };
  });

  return {
    paths: slugs,
    fallback: false,
  };
}
