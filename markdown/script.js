function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")  // primeiro escapa o &
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderizar(div) {
    // const md = window.markdownit({
    //     html: true // permite HTML embutido no Markdown
    // });

    const md = window.markdownit({
        html: true,
        // linkify: true,
        // typographer: true
    })

    // const markdownText = div.innerHTML;
    const markdownText = div.textContent;

    // renderiza markdown + html
    const html = md.render(markdownText);

    // oculta a div original
    div.style.display = 'none';

    // cria uma nova div com o conteúdo convertido
    const div2 = document.createElement('div');
    div2.className = 'markdown-output markdown-body';
    div2.innerHTML = html;

    // insere a nova div após a original
    div.insertAdjacentElement('afterend', div2);
}

function arrumar(div) {

    // div.innerHTML = escapeHTML(div.textContent)
    // console.log(div.innerHTML)
    // console.log(div.innerHTML)

    const lines = div.textContent.split('\n');
    const minIndent = Math.min(
        ...lines.filter(line => line.trim().length > 0).map(line => line.match(/^ */)[0].length)
    );
    const cleaned = lines.map(line => line.slice(minIndent)).join('\n');
    div.textContent = cleaned;
}

const markdowns = document.querySelectorAll(".markdown")
Array.from(markdowns).forEach(div => {
    arrumar(div)
    renderizar(div)
})



