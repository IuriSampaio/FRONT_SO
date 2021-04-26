import { PlantioComponent } from './plantio.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[PlantioComponent],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[PlantioComponent]
})
export class PlantioModule{}