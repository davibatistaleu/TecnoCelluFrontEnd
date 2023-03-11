var relogioHora = document.querySelector('#hora')
var relogioDia = document.querySelector('#dia')
var relogioFrase = document.querySelector('#frase')
const backgroundRelogio = document.querySelector('.container-horario')

const dataUsuario =  new Date();
const horas = dataUsuario.getHours();
const minutos = dataUsuario.getMinutes();

const dia = dataUsuario.getDate();
const ano = dataUsuario.getFullYear();

function mostrarMes() {
  let mes = dataUsuario.getMonth() + 1;
  if ( mes <= 9){
    mes = '0' + mes;
  }
  return mes;
}
function mostrarDiaDaSemana() {
  let dia = dataUsuario.getDay();
  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return diasDaSemana[dia];
}
function mostrarDia() {
  let mes = dataUsuario.getDate();
  if ( mes <= 9){
    mes = '0' + mes;
  }
  return mes;
}
function montarFrase() {
  let hora = dataUsuario.getHours();
  hora = 8
  if (hora >= 18 & hora <= 23){
    relogioFrase.innerHTML = 'Boa noite';
    backgroundRelogio.style.backgroundImage = 'url("../assets/imagens/boa-noite-login.gif")';
    return
  }
  if(hora >= 0 & hora <= 11){
    relogioFrase.innerHTML = 'Bom dia';
    backgroundRelogio.style.backgroundImage = 'url("../assets/imagens/bom-dia-login.gif")';
    console.log(backgroundRelogio)
    return
  }
  if(hora >= 12 & hora <= 17){
    relogioFrase.innerHTML = 'Boa tarde';
    console.log(hora)
    backgroundRelogio.style.backgroundImage = 'url("../assets/imagens/boa-tarde-login.gif")'
    return
  }
}

montarFrase()
relogioHora.innerHTML = `${horas}:${minutos}`
relogioDia.innerHTML = `${mostrarDiaDaSemana()} - ${mostrarDia()}/${mostrarMes()}/${dataUsuario.getFullYear()}`