import { Api } from './../../services/api.service';
import { Injectable } from "@angular/core";

export interface IPlantio{
    data:Date;
    sementes:Number;
    planta_id:Number; 
    funcionario_id:Number; 
    canteiro_id:Number;
}

@Injectable()
export class PlantioService {

    public plantios: Array<IPlantio>;

    constructor(){
        this.getPlantios();
    }

    public async setPlantio( plantio:IPlantio ) {
        
        if (plantio.data && plantio.sementes && plantio.planta_id && plantio.funcionario_id && plantio.canteiro_id){
            const newCanteiro = await new Api().request.post<IPlantio>(
                '/plantio',
                {
                    data:plantio.data,
                    sementes:plantio.sementes,
                    planta_id:plantio.planta_id,
                    canteiro_id:plantio.canteiro_id,
                    funcionario_id:plantio.funcionario_id
                }
            );
            
            if (newCanteiro.status == 201) {            
                this.plantios.push(newCanteiro.data);
                window.alert("Plantio de "+newCanteiro.data.sementes+" sementes criado com sucesso");
            }else{
                window.alert("Erro "+newCanteiro.status+" ao adicionar o canteiro");
            }
        }else{
            window.alert("não foram passados dados o suficiente")
        }
    }

    public async getPlantios( ) {
        const cants = await new Api().request.get<Array<IPlantio>>('/plantio');

        this.plantios = cants.data;
    }

}