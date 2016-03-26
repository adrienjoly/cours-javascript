// thank you, https://github.com/sawmac/display-markdown

(function () {

  var MD_URL_PREFIX = 'https://github.com/adrienjoly/cours-javascript/blob/gh-pages/';

  var file = file || "README.md";
  var reader = new stmd.DocParser();
  var writer = new stmd.HtmlRenderer();
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      display(xhr);
    }
  };

  function display(xhr) {
    var markdown = xhr.responseText;
    // transform relative github-hosted markdown links into absolute links to github
    markdown = markdown.replace(/\(([^\.\(\)]+\.md)\)/g, '(' + MD_URL_PREFIX + '$1)');
    var parsed = reader.parse(markdown);
    var content = writer.renderBlock(parsed);
    document.getElementById('content').innerHTML = content;
    
    /* try to extract h1 title and use as title for page
       if no h1, use name of file 
    */
    try {
      document.title = document.querySelector('h1').textContent
    } catch (e) {
      document.title = file;
    }
  }

  xhr.open('GET', file);
  xhr.send();
})();
