//A fórmula para calcular a área de uma circunferência é: area = π . raio2. 
//Considerando para este problema que π = 3.14159:
//Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

const pi = 3.14159;
let raio = parseFloat(lines.shift());

let area = pi * raio * raio;

console.log(`A=${area.toFixed(4)}`);