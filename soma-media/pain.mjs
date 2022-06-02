//fazer prog que faz stuff com  N e n

import * as readline from 'node:readline' //readline/promisses
import { exit, stdin as input, stdout as output} from 'node:process'
const rl = readline.createInterface({input, output}) 
const question = question => new Promise((resolve, reject) => rl.question(question + '', answer => resolve(answer)))

let tunum = 0
let tanum = 0
let thenum = 0

while(true) {
    let strNota = await question(`Digitar valor da nota ${tanum+1} do carinha ou N para calculo media ou R para numero aleatorio: `)
 
    if (strNota < 0 ) {
        console.log ('MAIOR QUE ZERO E MENOR QUE DEZ')
        continue
    }
    else if(strNota > 10) {
        console.log ('MAIOR QUE ZERO E MENOR QUE DEZ')
        continue
    }
    if (strNota.toUpperCase() == 'N') break
    else if (strNota.toUpperCase() == 'R') {
    strNota = Math.floor(Math.random() * 10)
    console.log(strNota)
    }
    else if (strNota == 0) {
        console.log('')
    }
    else if (strNota == isNaN) {
        console.log ('NENHUM NUMERO FOI DIGITADO ANIMAL')
        continue
    }
    console.log(strNota)
    let note = parseFloat(strNota)
    tunum = tunum + note
    tanum++
}

thenum = tunum/tanum
console.log('Sua media dedia é ' + thenum)
process.exit()