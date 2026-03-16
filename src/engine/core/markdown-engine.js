
import MarkdownIt from "markdown-it"
import hljs from "highlight.js"

const md = new MarkdownIt({
  html: true,
  linkify: true,
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return '<pre><code>' +
        hljs.highlight(str, { language: lang }).value +
        '</code></pre>'
    }
    return '<pre><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})

export function renderMarkdown(text){
  return md.render(text)
}
