import classes from "./Window.module.css";

export default function Window(props) {
  return (
    <div className={classes.background}>
      <div className={classes["top-bar"]}>
        <div className={`${classes["action-button"]} ${classes.close}`} />
        <div className={`${classes["action-button"]} ${classes.minimize}`} />
        <div className={`${classes["action-button"]} ${classes.fullscreen}`} />
      </div>
      <div className={classes["lower-bar"]}>
        <div className={classes.tab}>about-me.json</div>
        <div className={classes["tab-bar"]} />
      </div>
      <div className={classes.editor}>
        <div className={classes["line-numbers"]}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
        </div>
        <div className={classes["text-area"]}>
          <div>
            <span className={classes.outer}>{`{`}</span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"name"</span>:{" "}
            <span className={classes.value}>"Jagger Abney"</span>,
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={classes.field}>"age"</span>
            : <span className={classes.number}>22</span>,
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"pronouns"</span>:{" "}
            <span className={classes.value}>"he/him"</span>,
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"languages"</span>:{" "}
            <span className={classes.inner}>{`{`}</span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"fluent"</span>:{" "}
            <span className={classes.array}>[</span>
            <span className={classes.value}>"Java"</span>,{" "}
            <span className={classes.value}>"HTML"</span>,
            <span className={classes.value}>"CSS"</span>,{" "}
            <span className={classes.value}>"JavaScript"</span>
            <span className={classes.array}>]</span>,
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"familiar"</span>:{" "}
            <span className={classes.array}>[</span>
            <span className={classes.value}>"Python"</span>,{" "}
            <span className={classes.value}>"C++"</span>,
            <span className={classes.value}>"C#"</span>,{" "}
            <span className={classes.value}>"SQL"</span>,{" "}
            <span className={classes.value}>"NoSQL"</span>
            <span className={classes.array}>]</span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={classes.inner}>{`}`}</span>
            ,
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"technologies"</span>:{" "}
            <span className={classes.inner}>{`{`}</span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"fluent"</span>:{" "}
            <span className={classes.array}>[</span>
            <span className={classes.value}>"React"</span>,{" "}
            <span className={classes.value}>"NodeJS"</span>,
            <span className={classes.value}>"Express"</span>,{" "}
            <span className={classes.value}>"MongoDB"</span>
            <span className={classes.array}>]</span>,
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"familiar"</span>:{" "}
            <span className={classes.array}>[</span>
            <span className={classes.value}>"Next.js"</span>,
            <span className={classes.value}>"React Native"</span>,{" "}
            <span className={classes.value}>"MySQL"</span>
            <span className={classes.array}>]</span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={classes.inner}>{`}`}</span>
            ,
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"education"</span>:{" "}
            <span className={classes.inner}>{`{`}</span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"college"</span>:{" "}
            <span className={classes.value}>"Highline College"</span>,
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"degree"</span>:{" "}
            <span className={classes.value}>"Associate's of Science"</span>,
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"major"</span>:{" "}
            <span className={classes.value}>"Computer Science"</span>,
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.field}>"earned"</span>:
            <span className={classes.value}>"2021-12-21T04:56:59.000Z"</span>{" "}
            <span className={classes.comment}>// December 2021</span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={classes.inner}>{`}`}</span>
          </div>
          <div>
            <span className={classes.outer}>{`}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
