import { CanteiroService, ICanteiro } from './canteiro.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component } from "@angular/core";

// nome:string;
// luz_diaria:number;
// agua_diaria:number;

@Component({
    selector:"canteiro-form",
    templateUrl:"./canteiro.component.html",
    styleUrls:["./canteiro.component.scss"]
})
export class CanteiroComponent {

    public formulario: FormGroup;

    constructor( public FormBuilder:FormBuilder ){

        this.formulario = new FormGroup({
            nome:new FormControl(null),
            luz_diaria:new FormControl(null),
            agua_diaria:new FormControl(null),
        })

    }

    async createCanteiro(){
        const funcionario = new CanteiroService();

        const funcionarioModel:ICanteiro = {nome:this.formulario.value.nome,luz_diaria:this.formulario.value.luz_diaria,agua_diaria:this.formulario.value.agua_diaria};

        if (funcionarioModel.nome && funcionarioModel.agua_diaria && funcionarioModel.luz_diaria){
            await funcionario.setCanteiro(funcionarioModel);
        }
    }

}