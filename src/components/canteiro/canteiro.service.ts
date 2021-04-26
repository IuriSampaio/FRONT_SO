import { Api } from './../../services/api.service';
import { Injectable } from "@angular/core";

export interface ICanteiro{
    nome:string;
    luz_diaria:number;
    agua_diaria:number;
}

@Injectable()
export class CanteiroService {

    public canteiros: Array<ICanteiro>;

    constructor(){
        this.getCanteiros();
    }

    public async setCanteiro( canteiro:ICanteiro ) {
        
        if (canteiro.nome && canteiro.luz_diaria && canteiro.agua_diaria){
            const newCanteiro = await new Api().request.post<ICanteiro>(
                '/canteiro',
                {
                    nome:canteiro.nome,
                    luz_diaria:canteiro.luz_diaria,
                    agua_diaria:canteiro.agua_diaria
                }
            );
            
            if (newCanteiro.status == 201) {            
                this.canteiros.push(newCanteiro.data);
                window.alert("Canteiro "+newCanteiro.data.nome+" criado com sucesso");
            }else{
                window.alert("Erro "+newCanteiro.status+" ao adicionar o canteiro");
            }
        }else{
            window.alert("não foram passados dados o suficiente")
        }
    }

    public async getCanteiros( ) {
        const cants = await new Api().request.get<Array<ICanteiro>>('/canteiros');

        this.canteiros = cants.data;
    }

}