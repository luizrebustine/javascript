var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()
var res = 60 - minutos
console.log(`Faltam ${res} minutos para as ${horas+1} horas`)