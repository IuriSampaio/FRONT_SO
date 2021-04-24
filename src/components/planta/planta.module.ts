import { PlantaComponent } from './planta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionarioModule } from '../funcionario/funcionario.module';

@NgModule({
  declarations: [
    PlantaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FuncionarioModule
  ],
  exports:[
    PlantaComponent
  ]
})
export class PlantaModule { }
