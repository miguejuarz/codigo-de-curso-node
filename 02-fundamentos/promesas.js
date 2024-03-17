const empleados = [
    { id: 1,
    nombre: 'Fernanda'
    },
    { id: 2,
    nombre: 'Karen'
    },
    { id: 3,
    nombre: 'Linda'
    },
]

const salarios = [
    { id: 1,
    salario: '1000'
    },
    { id: 2,
    salario: '1200'
    },
];


const getEmpleado = ( id ) => {

    return new Promise((resolve, reject) => {       
        const empleado = empleados.find( e => e.id === id )?.nombre;

        ( empleado ) 
            ? resolve( empleado )
            : reject ( ` No exite empleado con id ${ id }` );
        
    });

}

const getSalario = ( id ) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find( s => s.id === id )?.salario;

        (salario)
            ? resolve( salario )
            : reject( `Lo siento no hay salario con id ${id}` );
    });
}

const id = 3;

// getEmpleado(id)
//     .then( empleado => console.log( empleado ))
//     .catch( err => console.log( err));

// getSalario(id)
//     .then( salario => console.log( salario ))
//     .catch( err => console.log( err));

let nombre;
//promesas en cadena
getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then( salario => console.log('El empleado: ', nombre,'tiene un salario de ',salario))
    .catch( err => console.log(err));