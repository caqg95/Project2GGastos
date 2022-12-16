import { Gasto } from '../Gasto';

export let categorias: Gasto[] = [
    {
        id:1,
        nombre:'Presupuesto Ejemplo 1',
        presupuesto:5000,
        gastototal:100,
        balance:4000,
        divisa:"$",
        gastodetalle:[
            {
                id:1,
                nombre:'Gasolina para el viaje a CR',
                categoria:'Transporte',
                monto:200
            },
            {
                id:2,
                nombre:'Compra de Medicamento',
                categoria:'Salud',
                monto:300
            },
            {
                id:3,
                nombre:'Salida al Cine',
                categoria:'Entretenimiento y salidas',
                monto:125
            },
            {
                id:4,
                nombre:'Cita',
                categoria:'Entretenimiento y salidas',
                monto:225
            },
            {
                id:5,
                nombre:'Pago de Alquiler',
                categoria:'Vivienda',
                monto:150
            },
        ]
    },
]