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
    contra: string;
    fotoperfil: string;
    perfil:string,
}

export interface viaje{
    id:string;
    capacidad:number;
    conductor:string;
    desde:string;
    hasta:string;
    patente:string;
    valor:number;
    espacio:number;
    descripcion:string;
}