import { ColheitaService, IColheita } from './colheita.service';
import { PlantaService } from './../planta/planta.service';
import { CanteiroService } from './../canteiro/canteiro.service';
import { FuncionarioService } from './../funcionario/funcionario.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component } from "@angular/core";
import { IPlanta } from '../planta/planta.service';
import { IFuncionario } from '../funcionario/funcionario.service';
import { ICanteiro } from '../canteiro/canteiro.service';

@Component({
    selector:"colheita-form",
    templateUrl:"./colheita.component.html",
    styleUrls:["./colheita.component.scss"]
})
export class ColheitaComponent{

    public formulario: FormGroup;

    plantas:      Array<IPlanta>;
    funcionarios: Array<IFuncionario>;
    canteiros:    Array<ICanteiro>;


    constructor( public FormBuilder:FormBuilder ){

        this.formulario = new FormGroup({
            peso:new FormControl(null),
            qtd:new FormControl(null),
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
        const plantio = new ColheitaService();

        const plantioModel:IColheita = {peso:this.formulario.value.peso,quantidade:this.formulario.value.qtd,canteiro_id:Number(this.formulario.value.canteiro_id),funcionario_id:Number(this.formulario.value.funcionario_id),planta_id:Number(this.formulario.value.planta_id)};

        if (plantioModel.quantidade&&plantioModel.peso){
            await plantio.setColheita(plantioModel)
        }
    }

    notNegative( ){
        const peso = Number(this.formulario.value.peso.toString().replace("-",""));
        const qtd = Number(this.formulario.value.qtd.toString().replace("-",""));

        this.formulario.get('peso').setValue(peso)
        this.formulario.get('qtd').setValue(qtd)
    
    }

    
}