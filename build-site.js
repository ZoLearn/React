const fs = require("fs");
const path = require("path");
const marked = require("marked");
const glob = require("glob");

const outputDir = path.join(__dirname, "dist");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

let html = `
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ZoLearn</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <header>
    <h1>ZoLearn</h1>
    <p>Samling av uppgifter och projekt i React</p>
    <form class="search-form">
      <input type="search" id="search" placeholder="Sök i README-filer..." />
    </form>
  </header>

  <main class="grid">
    <h2 class="category">Övningar</h2>
`;

const files = glob.sync("**/README.md", {
  ignore: ["**/node_modules/**", "**dist/**", "**/solution/**", "README.md"],
});

function categorizeREADME(category) {
  return files
    .filter((file) => file.startsWith(category))
    .map((file) => {
      const content = fs.readFileSync(file, "utf-8");
      const htmlContent = marked.parse(content);
      const url = `https://github.com/ZoLearn/React/blob/main/${file}`;
      const dir = path.dirname(file);

      return `
          <section class="card">
            <h2 class="title">${dir}</h2>
            <div>${htmlContent}</div>
            <a href="${url}" target="_blank">Visa på GitHub</a>
          </section>
        `;
    })
    .join("\n");
}

html += categorizeREADME("övningar");

html += `
    <h2 class="category">Projekt</h2>
`;
html += categorizeREADME("projekt");

html += `
  </main>

  <script>
    const searchElem = document.querySelector('#search');

    searchElem.addEventListener('keyup', () => {
        const query = searchElem.value.toLowerCase();
        const sections = document.querySelectorAll('section.card');
        sections.forEach(section => {
            section.style.display = section.textContent.toLowerCase().includes(query) ? '' : 'none';
        });
    })
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(outputDir, "index.html"), html);
console.log("Site generated in dist/index.html");
