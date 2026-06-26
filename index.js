const perfil = {
    nome: "Thiago Cruz",
    idade: 21,
    sobre: "Desenvolvedor de Sistemas em busca de novos desafios e aprendizados.",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"],
    projetos: [
        {
            nome: "Projeto 1",
            descricao: "Descrição do Projeto 1",
            ano: 2024
        },
        {
            nome: "Projeto 2",
            descricao: "Descrição do Projeto 2",
            ano: 2024
        }
    ],
    experiencias: [],
    cursos: [],
    contato: "thiago58452@gmail.com"
}

function renderizarPerfil(){
    document.getElementById("nome").innerText = perfil.nome;
    document.getElementById("idade").innerText = perfil.idade;
    document.getElementById("sobretext").innerText = perfil.sobre;
    document.getElementById("skills").innerHTML = "<li>" + perfil.tecnologias.join("</li><li>") + "</li>";
    document.getElementById("projects").innerHTML = "<li>" + perfil.projetos.map(projeto => "<a href=''>" + projeto.nome + "</a>").join("</li><li>") + "</li>";
    document.getElementById("email").innerText = perfil.contato;
}

window.onload = renderizarPerfil;