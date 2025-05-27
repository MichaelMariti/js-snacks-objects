console.log('snack-02')

const parole = ['pippo', 'PLUTO', 'Paperino'] // Pippo, Pluto, Paperino
const paroleFormattate = []
console.log = parole

for (let i = 0; i = parole.length; i++) {
    const parola = parole[i]
    console.log(i, parola)

    //prendere la prima lettera della parola e metterla maiuscola
    const firstChar = parola.charAt(0).toUpperCase()
    // firstChar = firstChar.toUpperCase()
    console.log(firstChar)
    //prendere dalla seconda lettera in poi e mettere tutto minuscolo
    const restoParola = parola.slice(1)
    restoParola = restoParola.toLowerCase
    console.log(restoParola)
    
    //concatenare il tutto
    const parolaFormattata = firstChar + restoParola
    console.log(parolaFormattata)
}   