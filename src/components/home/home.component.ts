import { Component } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

    public showFuncionarioForm:boolean = false
    public showCanteinroForm:boolean = false
    public showPlantaForm:boolean = false
    public showPlantioForm:boolean = false
    public showColhidoForm:boolean = false

    public showFunionarios:boolean = false
    public showPlantas:boolean = false
    public showCanteiros:boolean = false

    
    showContent(witch:string,isForm:boolean){
        if ( witch ==="funcionario" && isForm){
            this.showFuncionarioForm = true;
            this.showCanteinroForm = false;
            this.showColhidoForm =false;
            this.showPlantaForm = false;
            this.showPlantioForm = false;
            this.showFunionarios= false;
        }else if(witch==="funcionario" && !isForm){
            this.showFuncionarioForm = false;
            this.showCanteinroForm = false;
            this.showColhidoForm =false;
            this.showPlantaForm = false;
            this.showPlantioForm = false;
            this.showFunionarios= true;
        }else if(witch==="planta" && isForm){
            this.showFuncionarioForm = false;
            this.showCanteinroForm = false;
            this.showColhidoForm =false;
            this.showPlantaForm = true;
            this.showPlantioForm = false;
            this.showFunionarios= false;
        }else if(witch==="canteiro"&& isForm){
            this.showFuncionarioForm = false;
            this.showCanteinroForm = true;
            this.showColhidoForm =false;
            this.showPlantaForm = false;
            this.showPlantioForm = false;
            this.showFunionarios= false;
        }else if(witch==="colhido"&& isForm){
            this.showFuncionarioForm = false;
            this.showCanteinroForm = false;
            this.showColhidoForm =true;
            this.showPlantaForm = false;
            this.showPlantioForm = false;
            this.showFunionarios= false;
        }else if (witch==="plantio"&& isForm){
            this.showFuncionarioForm = false;
            this.showCanteinroForm = false;
            this.showColhidoForm =false;
            this.showPlantaForm = false;
            this.showPlantioForm = true;
            this.showFunionarios= false;    
        }
    }
}