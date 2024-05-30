import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';
import {ReciboModel} from '../models/recibo.model';
import {ClienteService} from'../services/cliente.service';

@Component({
  selector: 'app-recibo',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective,
    TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective],
  templateUrl: './recibo.component.html',
  styleUrl: './recibo.component.scss'
})
export class ReciboComponent {
  listaRecibo: ReciboModel[] = [];
  reciboModelo:ReciboModel=new ReciboModel();

  constructor(private clienteService:ClienteService){
   
    this.getRecibo();
  }

  getRecibo(){
    this.clienteService.getRecibo().subscribe({
      next:(respuesta)=>{
        console.log(respuesta);
       // console.log('entro al console Hay otro problema');
        this.listaRecibo=respuesta;
      },
      error :(error)=>{
        console.log(error);
      }
    })
  }


}
