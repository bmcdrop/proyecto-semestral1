export interface conductor{
    id?:string;
    name: string;
    apellido_paterno: string;
    apellido_materno: string;
    rut: string;
    edad: number;
    direccion: string;
    username: string;
    telefono: number;
    genero: string;
    correo: string;
    password: string;
    fotoperfil: string;
    perfil:'conductor'|'pasajero',
}
export interface pasajero{
    id:string;
    name: string;
    apellido_paterno: string;
    apellido_materno: string;
    rut: string;
    edad: number;
    direccion: string;
    username: string;
    telefono: number;
    genero: string;
    correo: string;
    password: string;
    fotoperfil: string;
    perfil:string,
}

export interface CambioDinero{
    PesoaDolar:{
        numero1:number;
        numero2:number;
    },
    DolaraPeso:{
        numero1:number;
        numero2:number;
    }
}