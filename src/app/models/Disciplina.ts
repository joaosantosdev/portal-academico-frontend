import { Deserializable } from './../helpers/Deserialization';

export class Disciplina implements Deserializable{
    public static statusDisciplina =new Array('','Cursando', 'Cursadas', 'Trancadas','Todas');
    public static modalidades =new Array('','PRESENCIAL', 'SEMI-PRESENCIAL', 'EaD');

    public id: number;
    public nome:string;
    public descricao:string;
    public cargaHoraria:string;
    public credito:string;
    public status:number
    public modalidade:number;
    public dataCriado:Date;
    public dataAtualizado:Date;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
