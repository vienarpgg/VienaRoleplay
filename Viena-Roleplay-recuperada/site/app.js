/* Na publicação, este arquivo é substituído pelo JavaScript original da Viena. */
(() => {
  const script = document.createElement("script");
  script.src = "https://alaska-ui.github.io/viena-regras1/app.js";
  script.onerror = () => {
    document.body.insertAdjacentHTML("beforeend", '<div class="load-error">Não foi possível carregar a lógica original da Viena. Publique pelo GitHub Actions para obter os arquivos completos.</div>');
  };
  document.body.appendChild(script);
})();
