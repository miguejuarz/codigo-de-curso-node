const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

// console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const { getNombre } = deadpool;



// const funccioon = getNombre.call(deadpool);
// console.log(funccioon);

function imprimeHeroe( { nombre, apellido, poder, edad = 0 }){
    nombre = 'Fernando';    
    console.log(nombre, apellido, poder, edad);
}
imprimeHeroe( deadpool );

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [ , h2, ] = heroes;
console.log(h2);