 // constantes"
 const adicionar = document.querySelector("#adicionar");
 const mostrar = document.querySelector("#mostrar");
 const limpar =  document.querySelector("#limpar");
 const res = document.querySelector(".res");

 let grupo = [];

 // função adcionar
 function add(){
     // verificando se ja existe um valor dentro do array
     if(localStorage.meugrupo){
         grupo =  JSON.parse(localStorage.getItem('meugrupo'));
     }

     let novoItem = document.querySelector("#nome").value;
     grupo.push(novoItem);
     document.querySelector("#nome").value = "";
     localStorage.meugrupo = JSON.stringify(grupo);
 } 

 function mostrarConteudo(){
     let resultados =  document.querySelector(".res");
     resultados.innerText = "";
     if(localStorage.meugrupo){
         grupo = JSON.parse(localStorage.getItem('meugrupo'));
     }

     for(var i in grupo){
         let p = document.createElement("p")
         p.innerText = grupo[i];
         resultados.appendChild(p);
     }
 }

 function limparGrupo(){
     grupo = []
     localStorage.clear();
 }
