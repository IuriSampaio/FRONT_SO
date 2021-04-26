import { CanteiroService } from './../canteiro/canteiro.service';
import { FuncionarioService } from './../funcionario/funcionario.service';
import { PlantaService } from './../planta/planta.service';
import { IPlantio, PlantioService } from './plantio.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component } from "@angular/core";
import { IPlanta } from '../planta/planta.service';
import { IFuncionario } from '../funcionario/funcionario.service';
import { ICanteiro } from '../canteiro/canteiro.service';

@Component({
    selector:"plantio-form",
    templateUrl:"./plantio.component.html",
    styleUrls:["./plantio.component.scss"]
})
export class PlantioComponent{

    public formulario: FormGroup;

    plantas:      Array<IPlanta>;
    funcionarios: Array<IFuncionario>;
    canteiros:    Array<ICanteiro>;


    constructor( public FormBuilder:FormBuilder ){

        this.formulario = new FormGroup({
            data:new FormControl(null),
            sementes:new FormControl(null),
            planta_id:new FormControl(null),
            funcionario_id:new FormControl(null),
            canteiro_id:new FormControl(null),
        });

        this.getCanteiro();
        this.getFuncionarios();
        this.getPlantas();

    }

    async getPlantas(){
        const planta = new PlantaService();

        await planta.getPlantas();

        this.plantas = planta.plantas;
    }
    async getFuncionarios(){
        const func = new FuncionarioService();

        await func.getFuncionarios();

        this.funcionarios = func.funcionarios;
    }
    async getCanteiro(){
        const cant = new CanteiroService();

        await cant.getCanteiros();

        this.canteiros = cant.canteiros;
    }

    async createPlantio(){
        const funcionario = new PlantioService();

        const funcionarioModel:IPlantio = {data:this.formulario.value.data,sementes:this.formulario.value.sementes,canteiro_id:Number(this.formulario.value.canteiro_id),funcionario_id:Number(this.formulario.value.funcionario_id),planta_id:Number(this.formulario.value.planta_id)};

        if (funcionarioModel.data&&funcionarioModel.sementes){
            await funcionario.setPlantio(funcionarioModel);
        }
    }


}