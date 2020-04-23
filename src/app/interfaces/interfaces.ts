
export interface RespuestaPosts {
  ok: boolean;
  pagina: number;
  posts: Post[];
}

export interface Post {
  imgs?: string[];
  _id?: string;
  mensaje?: string;
  coords?: string;
  usuario?: Usuario;
  created?: string;
}

export interface Usuario {
  _id?: string;
  nombre?: string;
  email?: string;
  direccion?: string;
  telefonoMovil?: string;
  num_documento?: string;
  tipo_documento?: string;
  tipoVehiculo?: string;
  sexo?: string;
  clave?: string;
  clave2?: string;
  foto?: string;
  foto2?: string;
  foto3?: string;
  foto4?: string;
  foto5?: string;
  foto6?: string;
  foto7?: string;
  foto8?: string;
  dato?: string;
  dato1?: string;
  dato2?: string;
  dato3?: string;
  dato4?: string;
  dato5?: string;
  dato6?: string;
  dato7?: string;
  dato8?: string;
}

