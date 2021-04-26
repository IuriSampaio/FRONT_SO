import { IPlanta, PlantaService } from './planta.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'planta-form',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.scss'],
})
export class PlantaComponent {

  public formulario: FormGroup;

    constructor( public formBuilder:FormBuilder ){

        this.formulario = new FormGroup({
            nome:new FormControl(null),
            daily_ligth:new FormControl(null),
            agua:new FormControl(null),
            peso:new FormControl(null)
        })

    }

    async createPlanta(){
        const funcionario = new PlantaService();

        const funcionarioModel:IPlanta = {nome:this.formulario.value.nome,daily_ligth:this.formulario.value.daily_ligth,agua:this.formulario.value.agua,peso:this.formulario.value.peso};

        if (funcionarioModel.nome && funcionarioModel.daily_ligth && funcionarioModel.peso && funcionarioModel.agua){
            await funcionario.setPlanta(funcionarioModel);
        }
    }

}