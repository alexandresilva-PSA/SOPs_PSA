---
layout: manual
title: "Central de Manuais PSA"
versao: "1.0"
search_enabled: false
---

<style>
/* CSS Específico para o Hub (sobrescreve o layout manual) */
.sidebar, .btn-toggle-sidebar {
    display: none !important;
}

.main-content {
    margin-left: 0 !important;
    width: 100% !important;
    padding: 2rem !important;
}

.content-wrapper {
    max-width: 1200px !important;
    margin: 0 auto;
}

/* Grid de Cards */
.hub-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
}

.hub-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
    text-decoration: none !important;
    color: inherit;
    height: 100%;
    position: relative;
    top: 0;
}

.hub-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: #14B8A6;
}

.hub-card-header {
    background: #f9fafb;
    padding: 2rem 1.5rem;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.hub-icon {
    width: 56px;
    height: 56px;
    background: rgba(20, 184, 166, 0.1);
    color: #0F766E;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.hub-icon .material-icons-round {
    font-size: 32px;
}

.hub-card-title {
    font-size: 1.25rem !important;
    font-weight: 700 !important;
    color: #111827;
    margin: 0 !important;
    line-height: 1.3;
}

.hub-card-body {
    padding: 1.5rem;
    color: #4B5563;
    flex-grow: 1;
    line-height: 1.6;
}

.hub-card-body p {
    margin: 0;
    font-size: 0.95rem;
}

.hub-card-footer {
    padding: 1rem 1.5rem;
    background: #f9fafb;
    border-top: 1px solid #e5e7eb;
    font-size: 0.875rem;
    font-weight: 600;
    color: #0D9488;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    transition: color 0.2s;
}

.hub-card:hover .hub-card-footer {
    color: #0F766E;
    background: rgba(20, 184, 166, 0.05);
}

.hub-header-hero {
    text-align: center;
    margin-bottom: 3rem;
    padding: 3rem 1rem;
    background: linear-gradient(135deg, #0F766E 0%, #14B8A6 100%);
    border-radius: 20px;
    color: white;
    box-shadow: 0 10px 15px -3px rgba(13, 148, 136, 0.2);
}

.hub-header-hero h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: white !important;
}

.hub-header-hero p {
    font-size: 1.1rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
    color: white !important;
}
</style>

<div class="hub-header-hero">
    <h1>Central de Manuais PSA</h1>
    <p>Documentação oficial e guias de uso para o ecossistema de ferramentas PSA Digital.</p>
</div>

<div class="hub-grid">
    <!-- DIFAL Inteligente -->
    <a href="manuais/difal-inteligente/" class="hub-card">
        <div class="hub-card-header">
            <div class="hub-icon">
                <span class="material-icons-round">analytics</span>
            </div>
            <h2 class="hub-card-title">DIFAL Inteligente</h2>
        </div>
        <div class="hub-card-body">
            <p>Ferramenta completa para auditoria de Diferencial de Alíquota. Aprenda a classificar itens, analisar métricas e gerar relatórios de consistência.</p>
        </div>
        <div class="hub-card-footer">
            Acessar Manual <span class="material-icons-round" style="font-size: 18px;">arrow_forward</span>
        </div>
    </a>

    <!-- Consulta XMLs -->
    <a href="manuais/consulta-xmls/" class="hub-card">
        <div class="hub-card-header">
            <div class="hub-icon">
                <span class="material-icons-round">folder_open</span>
            </div>
            <h2 class="hub-card-title">Consulta de XMLs</h2>
        </div>
        <div class="hub-card-body">
            <p>Central de busca e download de arquivos fiscais (NFe, CFe SAT, CTe). Utilize filtros avançados por CNPJ, período e chaves de acesso.</p>
        </div>
        <div class="hub-card-footer">
            Acessar Manual <span class="material-icons-round" style="font-size: 18px;">arrow_forward</span>
        </div>
    </a>

    <!-- Consulta EFD ICMS -->
    <a href="manuais/efd-icms/" class="hub-card">
        <div class="hub-card-header">
            <div class="hub-icon">
                <span class="material-icons-round">receipt_long</span>
            </div>
            <h2 class="hub-card-title">Consulta EFD ICMS</h2>
        </div>
        <div class="hub-card-body">
            <p>Gestão e análise de arquivos SPED Fiscal. Visualize registros detalhados, exporte dados para Excel e analise apurações de ICMS/IPI.</p>
        </div>
        <div class="hub-card-footer">
            Acessar Manual <span class="material-icons-round" style="font-size: 18px;">arrow_forward</span>
        </div>
    </a>

    <!-- Consulta EFD Contribuições -->
    <a href="manuais/efd-contribuicoes/" class="hub-card">
        <div class="hub-card-header">
            <div class="hub-icon">
                <span class="material-icons-round">price_check</span>
            </div>
            <h2 class="hub-card-title">EFD Contribuições</h2>
        </div>
        <div class="hub-card-body">
            <p>Manual da ferramenta de consulta de PIS/COFINS. Domine a análise em tela, downloads em lote e criação de perfis de exportação.</p>
        </div>
        <div class="hub-card-footer">
            Acessar Manual <span class="material-icons-round" style="font-size: 18px;">arrow_forward</span>
        </div>
    </a>
</div>
