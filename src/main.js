import marked from 'marked';

// Set options for marked.js
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

// Get the markdown content from Netlify CMS
const markdownContent = markdownElement.textContent;

// Parse the markdown content into HTML
const html = marked(markdownContent);

// Render the HTML on the front-end
document.getElementByClassName("blog-article").innerHTML = html;
