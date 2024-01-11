import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";

import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import Window from "../../UI/Window/Window";
import useCSSProperty from "../../../hooks/use-css-prop";

import classes from "./BlogDetail.module.css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("css", css);

export default function BlogDetail({ post }) {
  const windowBorderRadiusPx = useCSSProperty("--window-border-radius");

  const reactMarkdownRenderers = {
    img({ src, alt }) {
      const imageRef = useRef();

      fetch(`http://localhost:3000/api/image?key=${src}`)
        .then((response) => response.json())
        .then((data) => {
          if (imageRef.current) {
            imageRef.current.src = data.url;
          }
        });

      return (
        <Window>
          <Image ref={imageRef} alt={alt} />
        </Window>
      );
    },
    p({ node, children }) {
      if (node.children[0].tagName === "img") {
        const { properties, alt } = node.children[0];
        const imageRef = useRef();

        fetch(`http://localhost:3000/api/image?key=${properties.src}`)
          .then((response) => response.json())
          .then((data) => {
            if (imageRef.current) {
              imageRef.current.src = data.url;
            }
          });

        return (
          <Window innerClassName={`${classes.window} ${classes.imageWindow}`}>
            <Image className={classes.image} alt={alt} ref={imageRef} />
          </Window>
        );
      }

      return <p>{children}</p>;
    },
    code({ className, children }) {
      const language = className.split("-")[1];

      return (
        <Window innerClassName={classes.window}>
          <SyntaxHighlighter
            className={classes.code}
            style={atomDark}
            customStyle={{
              margin: 0,
              borderBottomLeftRadius: `${windowBorderRadiusPx}px`,
              WebkitBorderBottomRightRadius: `${windowBorderRadiusPx}px`
            }}
            language={language}
            children={children}
          />
        </Window>
      );
    },
    a({ href, children }) {
      return (
        <a target="_blank" href={href}>
          {children}
        </a>
      );
    }
  };

  return (
    <>
      <Head>
        <title>{`Jagger Abney - ${post.title}`}</title>
      </Head>
      <article className={classes.content}>
        <ReactMarkdown components={reactMarkdownRenderers}>
          {post.content}
        </ReactMarkdown>
      </article>
    </>
  );
}
