document.getElementById('postagem-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const titulopost= this.titulopost.value;
    const post = this.post.value;

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json ; charset=UTF-8'
            },
            body: JSON.stringify({ titulopost,post })
        })
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados);
            document.getElementById('renderizador-titulo').innerHTML = `Título: ${titulopost}`;
            document.getElementById('renderizador-conteudo').innerHTML = `Postagem: ${post}`;
        })
        .catch(error => {
        console.error(error);
        });
    }catch (error) {
        console.error('Erro:', error);
    }
});
        //const data = await response.json();
        //document.getElementById('resultado-insert').innerText = 'Dados inseridos: ' + JSON.stringify(data);



/*
const salvarGrade = grade => {
    // TODO
    fetch('https://api.learnjavascript.online/demo/grades.json', {
method: "PUT", 
body: JSON.stringify({
grade: grade
})
})
.then(resposta => resposta.json())
.then(dados => {
console.log(dados); // lê resposta do servidor
})
.catch(error => {
console.error(error);
});
};
*/
