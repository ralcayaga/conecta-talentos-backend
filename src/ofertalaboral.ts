export class Empresa{

    constructor(
    
        public id : number,
        public fechaCreación : Date,
        public descripcion : string,
        public cargo : string,
        public region : string,
        public tipo   : string, 
        public estado : string,
        public empresa : string,
        public postulaciones : number
    ){}

}