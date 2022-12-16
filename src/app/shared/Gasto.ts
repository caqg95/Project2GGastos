
export interface Gasto {
    id: number;
    nombre: string;
    presupuesto: number;
    gastototal?: number;
    balance?: number;
    divisa?: string;
    gastodetalle?:GastoDetalle[]
}

export interface GastoDetalle {
    id: number;
    nombre: string;
    categoria: string;
    monto:number;
}