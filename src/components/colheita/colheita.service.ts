import { Api } from './../../services/api.service';
import { Injectable } from "@angular/core";

export interface IColheita{
    peso:Number;
    quantidade:Number;
    planta_id:Number; 
    funcionario_id:Number; 
    canteiro_id:Number;
}

@Injectable()
export class ColheitaService {

    public colheitas: Array<IColheita>;

    constructor(){
        this.getColheitas();
    }

    public async setColheita( plantio:IColheita ) {
        
        if (plantio.peso && plantio.quantidade && plantio.planta_id && plantio.funcionario_id && plantio.canteiro_id){
            const newCanteiro = await new Api().request.post<IColheita>(
                '/colhido',
                {
                    peso:plantio.peso,
                    quantidade:plantio.quantidade,
                    planta_id:plantio.planta_id,
                    canteiro_id:plantio.canteiro_id,
                    funcionario_id:plantio.funcionario_id
                }
            );
            
            if (newCanteiro.status == 201) {            
                this.colheitas.push(newCanteiro.data);
                window.alert("Colheita de "+newCanteiro.data.quantidade+"Kg criada com sucesso");
            }else{
                window.alert("Erro "+newCanteiro.status+" ao adicionar a colheta");
            }
        }else{
            window.alert("não foram passados dados o suficiente")
        }
    }

    public async getColheitas( ) {
        const cants = await new Api().request.get<Array<IColheita>>('/colhido');

        this.colheitas = cants.data;
    }

}