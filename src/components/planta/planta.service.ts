import { Api } from './../../services/api.service';
import { Injectable } from "@angular/core";

export interface IPlanta{
    nome:String;
    daily_ligth:String;
    agua:Number;
    peso:Number;
}

@Injectable()
export class PlantaService {

    public plantas: Array<IPlanta>;

    constructor(){
        this.getPlantas();
    }

    public async setPlanta( planta:IPlanta ) {
        
        if (planta.nome && planta.daily_ligth && planta.peso && planta.agua){
            const newPlanta = await new Api().request.post<IPlanta>(
                '/planta',
                {
                    nome:planta.nome,
                    daily_ligth:planta.daily_ligth,
                    agua:planta.agua,
                    peso:planta.peso
                }
            );
            
            if (newPlanta.status == 201) {            
                this.plantas.push(newPlanta.data);
                window.alert("Planta "+newPlanta.data.nome+" criado com sucesso");
            }else{
                window.alert("Erro "+newPlanta.status+" ao adicionar a planta");
            }
        }else{
            window.alert("não foram passados dados o suficiente")
        }
    }

    public async getPlantas( ) {
        const plant = await new Api().request.get<Array<IPlanta>>('/planta');

        this.plantas = plant.data;
    }

}