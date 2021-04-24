import { FuncionarioService, IFuncionario } from './../funcionario.service';
import { Component, Input } from "@angular/core";
import { FormBuilder, FormControl,FormGroup } from '@angular/forms';

@Component({
    selector:"form-funcionario",
    templateUrl:"./form.component.html",
    styleUrls:["./form.component.scss"],
    providers:[FuncionarioService]
})
export class FormFuncionario{

    public formulario: FormGroup;

    constructor( public formBuilder:FormBuilder ){

        this.formulario = new FormGroup({
            nome:new FormControl(null),
            age_nasc:new FormControl(null)
        })

    }


    async createFuncionario(){
        const funcionario = new FuncionarioService();

        const funcionarioModel:IFuncionario = {nome:this.formulario.value.nome,age_nasc:this.formulario.value.age_nasc}

        if (funcionarioModel.nome && funcionarioModel.age_nasc){
            await funcionario.setFuncionario(funcionarioModel);
        }
    }

}