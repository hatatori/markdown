function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")  // primeiro escapa o &
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


        function markdown_render(div) {
            const md = window.markdownit({
                html: true
            });
            // const input = div.innerHTML;
            const input = div.textContent;
            const html = md.render(input);
            // div.innerHTML = html;
            div.style.display = 'none';
            const div2 = document.createElement('div');
            div2.className = 'markdown-output markdown-body';
            div2.innerHTML = html;
            div.insertAdjacentElement('afterend', div2);
        }

        function trim_all(div) {
            div.innerHTML = div.innerHTML
                // div.innerHTML = div.innerHTML
                .split('\n')
                .map(line => line.trim())
                .join('\n');
        }

        document.querySelectorAll(".markdown").forEach(div => {
            trim_all(div);
            markdown_render(div);
        });


