import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanteiroComponent } from './canteiro.component';

@NgModule({
    declarations:[CanteiroComponent],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[CanteiroComponent]
})
export class CanteiroModule{}