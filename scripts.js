const codes = ["teste", "xbox360", "cruzeiro", "mariaclara", "code5", "code6", "code7"];
const pages = ["index.html", "2 teste.html", "3 xbox360.html", "4 cruzeiro.html", "5 mariaclara.html", "pagina6.html", "pagina7.html"];

function validateCode(currentPage) {
    const input = document.getElementById("code-input").value;
    const currentIndex = pages.indexOf(currentPage);

    if (input === codes[currentIndex]) {
        if (currentIndex < pages.length - 1) {
            window.location.href = pages[currentIndex + 1];
        } else {
            alert("Este é o Código Final!");
        }
    } else {
        alert("Código inválido. Tente novamente.");
    }
}
