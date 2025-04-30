const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const marked = require("marked");
const glob = require("glob");

const outputDir = path.join(__dirname, "dist");
//if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

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
`;

const files = glob.sync("**/README.md", {
  ignore: ["**/node_modules/**", "**dist/**", "**/solution/**", "README.md"],
});

for (const file of files) {
  const content = fs.readFileSync(file, "utf-8");
  const htmlContent = marked.parse(content);
  const url = `https://github.com/ZoLearn/React/blob/main/${file}`;
  const dir = path.dirname(file);

  html += `
    <section class="card">
      <h2>${dir}</h2>
      <p class="readme">${htmlContent}</p>
      <a href="${url}" target="_blank">Visa på GitHub</a>
    </section>
  `;
}

html += `
  </main>

  <script>
    const searchElem = document.querySelector('#search');

    searchElem.addEventListener('keyup', () => {
        const query = searchElem.value.toLowerCase();
        const items = document.querySelectorAll('ul li');
        items.forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(query) ? '' : 'none';
        });
    })
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(outputDir, "index.html"), html);
console.log("Site generated in dist/index.html");
