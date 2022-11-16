//document.querySelector('.conteudo-js').innerHTML = 'Bem Vindo...';
let div = document.getElementById('conteudo-principal');
let texto = `Olá, Seja Bem Vindo ao meu Mundo...`;
//Me chamo Thamyris e sou web developer em ascensão!

function escrever(str, el) {
  let char = str.split('').reverse();
  let typer = setInterval(function () {
    if (!char.length) return clearInterval(typer);
    let next = char.pop();
    el.innerHTML += next;
  }, 100);
}
escrever(texto, div);
