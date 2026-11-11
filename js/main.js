import { indicadores, cursos, vagas, candidatos, integrantes } from './dados.js';


const moeda = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const dataBR = iso => iso.split('-').reverse().join('/');


function criar(tag, classe, html) {
  const elemento = document.createElement(tag);
  elemento.className = classe;
  elemento.innerHTML = html;
  return elemento;
}


function renderizar(idContainer, lista, montarCard) {
  const container = document.getElementById(idContainer);
  lista.forEach(item => container.appendChild(montarCard(item)));
}


renderizar('lista-indicadores', indicadores, i =>
  criar('article', 'card indicador',
    `<strong>${i.valor.toLocaleString('pt-BR')}</strong><span>${i.titulo}</span>`));


renderizar('lista-cursos', cursos, c =>
  criar('article', 'card',
    `<img src="${c.imagem}" alt="Imagem ilustrativa do curso ${c.nome}" loading="lazy">
     <div class="corpo">
       <span class="etiqueta">${c.areaAtuacao}</span>
       <h3>${c.nome}</h3>
       <p>${c.resumo}</p>
       <ul class="meta">
         <li><b>Duração:</b> ${c.duracaoHoras} horas</li>
         <li><b>Período:</b> ${dataBR(c.dataInicio)} a ${dataBR(c.dataFim)}</li>
       </ul>
       <p class="preco">${moeda(c.valor)}</p>
       <a class="botao" href="#cursos">Efetuar matrícula</a>
     </div>`));


renderizar('lista-vagas', vagas, v =>
  criar('article', 'card vaga',
    `<div class="corpo">
       <span class="etiqueta">${v.local}</span>
       <h3>${v.nomeVaga}</h3>
       <p>${v.descricao}</p>
       <a class="botao" href="#oportunidades">Quero me candidatar</a>
     </div>`));


renderizar('lista-candidatos', candidatos, c =>
  criar('article', 'card candidato',
    `<img class="foto" src="${c.foto}" alt="Foto de ${c.nome}" loading="lazy">
     <div class="corpo">
       <h3>${c.nome}, ${c.idade} anos</h3>
       <p class="area">${c.areaAtuacao}</p>
       <p>${c.formacao}</p>
       <p class="bio">${c.shortbio}</p>
       <ul class="contato">
         <li>${c.email}</li>
         <li>${c.telefone}</li>
         <li>${c.redesSociais}</li>
       </ul>
       <a class="botao" href="#candidatos">Conectar</a>
     </div>`));

// Rodapé
renderizar('lista-integrantes', integrantes, a =>
  criar('li', '', `<b>${a.nome}</b> - ${a.rm}`));
