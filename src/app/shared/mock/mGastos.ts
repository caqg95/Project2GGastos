import { Gasto } from '../Gasto';

export let Gastos: Gasto[] = [
    {
        id:'7de09356-7d7d-11ed-a1eb-0242ac120002',
        nombre:'Presupuesto Ejemplo 1',
        presupuesto:5000,
        gastototal:100,
        balance:4000,
        divisa:"$",
        gastodetalle:[
            {
                id:'a49b8e60-7d7d-11ed-a1eb-0242ac120002',
                nombre:'Gasolina para el viaje a CR',
                categoria:'Transporte',
                monto:200
            },
            {
                id:'abd4cd40-7d7d-11ed-a1eb-0242ac120002',
                nombre:'Compra de Medicamento',
                categoria:'Salud',
                monto:300
            },
            {
                id:'b143bf34-7d7d-11ed-a1eb-0242ac120002',
                nombre:'Salida al Cine',
                categoria:'Entretenimiento y salidas',
                monto:125
            },
            {
                id:'b75e6856-7d7d-11ed-a1eb-0242ac120002',
                nombre:'Cita',
                categoria:'Entretenimiento y salidas',
                monto:225
            },
            {
                id:'bc5cde96-7d7d-11ed-a1eb-0242ac120002',
                nombre:'Pago de Alquiler',
                categoria:'Vivienda',
                monto:150
            },
        ]
    },
]