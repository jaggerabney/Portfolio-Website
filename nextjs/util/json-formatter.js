import classes from "../components/UI/CodeWindow/CodeWindow.module.css";

export default function formatJson(json) {
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      var cls = classes.number;

      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = classes.key;
        } else {
          cls = classes.string;
        }
      } else if (/true|false/.test(match)) {
        cls = classes.boolean;
      } else if (/null/.test(match)) {
        cls = classes.null;
      }
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
}
