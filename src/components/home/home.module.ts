import { PlantioModule } from './../plantio/plantio.module';
import { CanteiroModule } from './../canteiro/canteiro.module';
import { PlantaModule } from './../planta/planta.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionarioModule } from '../funcionario/funcionario.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FuncionarioModule,
    PlantaModule,
    CanteiroModule,
    PlantioModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
