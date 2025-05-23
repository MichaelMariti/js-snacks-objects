console.log('snack object 01')

const cars = [
    {
        marca: 'Ford',
        modello: 'Fiesta',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Nissan',
        modello: 'Kashkai',
        alimentazione: 'Gpl',
    },
    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'Diesel',
    },
    {
        marca: 'Ford',
        modello: 'Focus',
        alimentazione: 'Metano',
    },
    {
        marca: 'Fiat',
        modello: 'Uno',
        alimentazione: 'Elettrica',
    },
    {
        marca: 'Ford',
        modello: 'Mustang',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Citroen',
        modello: 'C1',
        alimentazione: 'Diesel',
    },
    {
        marca: 'Peugeot',
        modello: '206',
        alimentazione: 'Gpl',
    },
    {
        marca: 'Hyunday',
        modello: 'Pippo',
        alimentazione: 'Elettrica',
    },
    {
        marca: 'Ferrari',
        modello: 'Testa rossa',
        alimentazione: 'Benzina',
    },
    
]

const Benzina = []
const Diesel = []
const altreAlimentazioni = []

console.log(cars)
for (let i = 0; i < cars.length; i++) {
    const currentCar = cars[i]
    console.log(i, currentCar.alimentazione)
    const alimentazione = currentCar.alimentazione

    if (alimentazione === 'Benzina') {
        Benzina.push(currentCar)
    }
    else if (alimentazione === 'Diesel') {
        Diesel.push(currentCar)
    }
    else {
        altreAlimentazioni.push(currentCar)
    }
}

console.log(Benzina)
console.log(Diesel)
console.log(altreAlimentazioni)