
function renderizar(div) {
    const md = window.markdownit();
    const markdownText = div.innerHTML
    const html = md.render(markdownText);
    div.style.display = 'none'

    const div2 = document.createElement('div');
    div2.className = 'markdown-output markdown-body';
    div2.innerHTML = html.replace(/&amp;lt;/g, "&lt;").replace(/&amp;gt;/g, "&gt;");

    div.insertAdjacentElement('afterend', div2);
}

function arrumar(div) {
    
    div.innerHTML = div.innerHTML.replace(/</g, '&lt;')
    console.log(div.innerHTML)

    const lines = div.textContent.split('\n');
    const minIndent = Math.min(
        ...lines.filter(line => line.trim().length > 0).map(line => line.match(/^ */)[0].length)
    );
    const cleaned = lines.map(line => line.slice(minIndent)).join('\n');
    div.textContent = cleaned;
}

function renderizarHTML() {
    const langhtml = Array.from(document.querySelectorAll(".language-html"))
    langhtml.forEach(e => {
        // e.innerHTML = e.innerHTML.replace(/&lt;/g, '<')
        // e.innerHTML = e.innerHTML.replace('v', 'xxx')

            // .replace(/&lt;/g, 'XX')
            // .replace(/&gt;/g, '>')
            // .replace(/&amp;/g, '&')
    })
}

// arrumar(document.getElementById("tarea"))
// renderizar(document.getElementById("tarea"))

const markdowns = document.querySelectorAll(".markdown")
Array.from(markdowns).forEach(div => {
    // renderizarHTML()
    arrumar(div)
    renderizar(div)
})



