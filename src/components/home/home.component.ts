import { FuncionarioService } from './../funcionario/funcionario.service';
import { ColheitaService } from './../colheita/colheita.service';
import { PlantioService } from './../plantio/plantio.service';
import { PlantaService } from './../planta/planta.service';
import { Component } from '@angular/core';
import { IColheita } from '../colheita/colheita.service';
import { IPlantio } from '../plantio/plantio.service';
import { IFuncionario } from '../funcionario/funcionario.service';

@Component({
  selector: 'homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

    public plantios: Array<IPlantio>
    public colheitas:Array<IColheita>
    public funcionarios:Array<IFuncionario>

    public showFuncionarioForm:boolean = false
    public showCanteinroForm:boolean = false
    public showPlantaForm:boolean = false
    public showPlantioForm:boolean = false
    public showColhidoForm:boolean = false
    public showDefault:boolean = true

    constructor(){
        this.getPlantios();
        this.getColheitas();
        this.getFuncionarios();
    }

    showContent(witch:string,isForm:boolean){
        if ( witch ==="funcionario" && isForm){
            this.showFuncionarioForm = true;
            this.showCanteinroForm = false;
            this.showColhidoForm =false;
            this.showPlantaForm = false;
            this.showPlantioForm = false;
            this.showDefault=false;
        }else if(witch==="planta" && isForm){
            this.showFuncionarioForm = false;
            this.showCanteinroForm = false;
            this.showColhidoForm =false;
            this.showPlantaForm = true;
            this.showPlantioForm = false;
            this.showDefault=false;
        }else if(witch==="canteiro"&& isForm){
            this.showFuncionarioForm = false;
            this.showCanteinroForm = true;
            this.showColhidoForm =false;
            this.showPlantaForm = false;
            this.showPlantioForm = false;
            this.showDefault=false;
        }else if(witch==="colhido"&& isForm){
            this.showFuncionarioForm = false;
            this.showCanteinroForm = false;
            this.showColhidoForm =true;
            this.showPlantaForm = false;
            this.showPlantioForm = false;
            this.showDefault=false;
        }else if (witch==="plantio"&& isForm){
            this.showFuncionarioForm = false;
            this.showCanteinroForm = false;
            this.showColhidoForm =false;
            this.showPlantaForm = false;
            this.showPlantioForm = true;
            this.showDefault=false;
        }else{
            this.showFuncionarioForm = false;
            this.showCanteinroForm = false;
            this.showColhidoForm =false;
            this.showPlantaForm = false;
            this.showPlantioForm = false;
            this.showDefault=true;
        }
    }

    async getPlantios(){
        const plan = new PlantioService()
        await plan.getPlantios();
        this.plantios = plan.plantios;
    }

    async getColheitas(){
        const col = new ColheitaService();
        await col.getColheitas();
        this.colheitas = col.colheitas;
    }

    async getFuncionarios(){
        const fun = new FuncionarioService();
        await fun.getFuncionarios();
        this.funcionarios = fun.funcionarios;
    }
}