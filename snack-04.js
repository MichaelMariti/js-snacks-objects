console.log('snack-04')

const persone = [
    {
        nome: 'Luca',
        cognome: 'Rossi',
        eta: 17,
    },
    {
        nome: 'Roberta',
        cognome: 'De Vincenzi',
        eta: 62,
    },
    {
        nome: 'Marco',
        cognome: 'Bo',
        eta: 15,
    },
    {
        nome: 'Lucia',
        cognome: 'Pinzo',
        eta: 49,
    },
]

console.log(persone)

const messaggi = []

for (let i = 0; i < persone.length; i++) {
    const persona = persone[i]
    console.log(i, persona)
    const nome = persona.nome
    const cognome = persona.cognome
    const eta = persona.eta

    let messaggio = `${nome} ${cognome}`
    // console.log(messaggio)

    if (eta < 18) {
        messaggio += ' non'
    }

    messaggio += ' puo guidare'
    console.log(messaggio)

    messaggi.push(messaggio)

}

// 'nome cognome puo guidare'
// 'Luca Rossi non puo guidare'