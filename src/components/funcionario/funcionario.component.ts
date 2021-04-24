import { FormFuncionario } from './form/form.component';
import { FuncionarioService, IFuncionario } from './funcionario.service';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'funcionario-form',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss'],
  providers: [FuncionarioService]
})
export class FuncionarioComponent { 

  funcionariosService = new FuncionarioService();
  
  async showModal(){
    const name = prompt("Digiteo nome do ususario");
    const age = prompt("Digite a data de nascimento do funcionario");
  
    const funcionario:IFuncionario = {nome:name,age_nasc:new Date(age)} 
    await this.funcionariosService.setFuncionario(funcionario);
  }

}