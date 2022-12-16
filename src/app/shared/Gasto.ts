
export interface Gasto {
    id?: string;
    nombre?: string;
    presupuesto: number;
    gastototal?: number;
    balance?: number;
    divisa?: string;
    gastodetalle?:GastoDetalle[]
}

export interface GastoDetalle {
    id: string;
    nombre: string;
    categoria: string;
    monto:number;
}