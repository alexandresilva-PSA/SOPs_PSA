/**
 * PSA Manuais - Editor Module
 * Funções de edição, exportação e exclusão de seções
 */

let isEditing = false;

// Toggle edit mode
function toggleEditMode() {
    isEditing = !isEditing;
    const body = document.body;
    const btnIcon = document.getElementById('icon-edit');

    if (isEditing) {
        body.classList.add('editing-mode');
        if (btnIcon) btnIcon.textContent = 'check';

        // Enable contenteditable
        document.querySelectorAll('.editable-text, .editable-area').forEach(el => {
            el.contentEditable = "true";
        });
    } else {
        body.classList.remove('editing-mode');
        if (btnIcon) btnIcon.textContent = 'edit';

        // Disable contenteditable
        document.querySelectorAll('.editable-text, .editable-area').forEach(el => {
            el.contentEditable = "false";
        });
    }
}

// Export read-only HTML version
function shareManual() {
    const clone = document.documentElement.cloneNode(true);

    // 1. Remove admin toolbar
    const toolbar = clone.querySelector('#admin-toolbar');
    if (toolbar) toolbar.remove();

    // 2. Remove section delete buttons
    clone.querySelectorAll('.section-delete-btn').forEach(b => b.remove());

    // 3. Remove marker delete buttons
    clone.querySelectorAll('.marker-delete-btn').forEach(b => b.remove());

    // 4. In floating toolbar, remove only the add marker button
    clone.querySelectorAll('.floating-toolbar').forEach(ft => {
        const btnMarker = ft.querySelector('button[onclick*="addMarker"]');
        if (btnMarker) btnMarker.remove();

        // Remove visual separator
        const divider = ft.querySelector('div[style*="width:1px"]');
        if (divider) divider.remove();
    });

    // 5. Remove contenteditable (Read-Only)
    clone.querySelectorAll('[contenteditable="true"]').forEach(el => {
        el.removeAttribute('contenteditable');
        el.classList.remove('editable-text', 'editable-area');
    });

    const body = clone.querySelector('body');
    body.classList.remove('editing-mode');

    // 6. Generate and download HTML
    const htmlContent = '<!DOCTYPE html>\n' + clone.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Manual_Leitura.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Delete section
function deleteSection(btn) {
    if (confirm('Tem certeza que deseja excluir esta seção inteira?')) {
        btn.closest('.secao').remove();
    }
}

// Initialize delete buttons on section headers
function initEditorExtras() {
    document.querySelectorAll('.secao-header').forEach(header => {
        if (header.querySelector('.section-delete-btn')) return;

        const btn = document.createElement('button');
        btn.className = 'section-delete-btn';
        btn.innerHTML = '<span class="material-icons-round">delete_forever</span>';
        btn.title = "Excluir esta seção";
        btn.onclick = () => deleteSection(btn);
        header.appendChild(btn);
    });
}

// ============================================================
// NEW: Export to Markdown + Open GitHub
// ============================================================

function exportAndCommit() {
    // 1. Convert HTML to Markdown
    const markdown = convertToMarkdown();

    // 2. Download MD file
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'manual_editado.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // 3. Open GitHub for commit (configure your repo URL)
    const githubUrl = window.PSA_GITHUB_URL || 'https://github.com';
    window.open(githubUrl, '_blank');
}

function convertToMarkdown() {
    const content = document.querySelector('.content-wrapper');
    if (!content) return '# Manual\n\nConteúdo não encontrado.';

    let md = '';
    const title = document.querySelector('.header-title');
    const version = document.querySelector('.badge-versao');

    if (title) md += `# ${title.textContent.trim()}\n\n`;
    if (version) md += `**${version.textContent.trim()}**\n\n---\n\n`;

    // Process sections
    content.querySelectorAll('.secao').forEach(secao => {
        const h2 = secao.querySelector('.secao-header h2');
        if (h2) {
            md += `## ${h2.textContent.trim()}\n\n`;
        }

        const conteudo = secao.querySelector('.secao-conteudo');
        if (conteudo) {
            // Process H3
            conteudo.querySelectorAll('h3').forEach(h3 => {
                md += `### ${h3.textContent.trim()}\n\n`;
            });

            // Process paragraphs
            conteudo.querySelectorAll('p').forEach(p => {
                md += `${p.textContent.trim()}\n\n`;
            });

            // Process images
            conteudo.querySelectorAll('img').forEach(img => {
                const alt = img.alt || 'Imagem';
                const src = img.src || img.getAttribute('src');
                md += `![${alt}](${src})\n\n`;
            });

            // Process lists
            conteudo.querySelectorAll('ul').forEach(ul => {
                ul.querySelectorAll('li').forEach(li => {
                    md += `- ${li.textContent.trim()}\n`;
                });
                md += '\n';
            });

            // Process tips
            conteudo.querySelectorAll('.dica p').forEach(dica => {
                md += `> 💡 **Dica:** ${dica.textContent.trim()}\n\n`;
            });

            // Process warnings
            conteudo.querySelectorAll('.aviso p').forEach(aviso => {
                md += `> ⚠️ **Aviso:** ${aviso.textContent.trim()}\n\n`;
            });
        }

        md += '\n---\n\n';
    });

    return md;
}

// Initialize editor on page load
document.addEventListener('DOMContentLoaded', () => {
    initEditorExtras();
});
