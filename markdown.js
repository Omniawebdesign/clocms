const markdownIt = require('markdown-it');
const md = new markdownIt();

function convertMarkdown(markdownContent) {
    return md.render(markdownContent);
}
