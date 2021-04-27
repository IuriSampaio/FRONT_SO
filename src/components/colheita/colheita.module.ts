import { ColheitaComponent } from './colheita.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[ColheitaComponent],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[ColheitaComponent]
})
export class ColheitaModule{}