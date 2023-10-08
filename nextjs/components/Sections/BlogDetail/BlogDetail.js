import Image from "next/image";

import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import classes from "./BlogDetail.module.css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function BlogDetail({ post }) {
  const reactMarkdownRenderers = {
    img({ src, alt }) {
      return <Image src={`/images/posts/${post.slug}/${src}`} alt={alt} />;
    },
    p({ node, children }) {
      if (node.children[0].tagName === "img") {
        const { properties, alt } = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${properties.src}`}
              alt={alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{children}</p>;
    },
    code({ className, children }) {
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <ReactMarkdown components={reactMarkdownRenderers}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
