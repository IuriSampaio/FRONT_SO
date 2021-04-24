import { FormFuncionario } from './form/form.component';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioComponent } from './funcionario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FuncionarioComponent,
    FormFuncionario
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FuncionarioComponent
  ],
  providers: [
    FuncionarioService
  ],
})
export class FuncionarioModule { }
