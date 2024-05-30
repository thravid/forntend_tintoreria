import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';
import { ClienteModel } from "../models/cliente.model";
import { ReciboModel } from "../models/recibo.model";
import { ReporteModel } from "../models/reporte.model";
import {ClienteService} from'../services/cliente.service';



function crearTabla(repor: ReporteModel[]) {
  // Obtener el elemento donde se agregará la tabla
  const contenedorTabla: HTMLElement | null = document.getElementById('tabla-container');

  if (contenedorTabla) {
    // Crear la tabla y sus elementos
    const tabla: HTMLTableElement = document.createElement('table');
    const tbody: HTMLTableSectionElement = document.createElement('tbody');

    // Iterar sobre los elementos del reporte para crear las filas de la tabla
    repor.forEach((elemento: ReporteModel) => {
      const fila: HTMLTableRowElement = document.createElement('tr');
      fila.innerHTML = `
        <td>${elemento.cliente.Nombre}</td>
        <td>${elemento.recibo}</td>
        <!-- Agrega más celdas <td> si es necesario -->
      `;
      tbody.appendChild(fila);
    });

    // Agregar el tbody a la tabla
    tabla.appendChild(tbody);

    // Agregar la tabla al contenedor en el DOM
    contenedorTabla.appendChild(tabla);
  }
}






@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective
    , TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {

  listaReporte: ReporteModel[] = [];
  listaCliente:ClienteModel[] = [];
  listaRecibo:ReciboModel[] = [];
  reporteModelo:ReporteModel=new ReporteModel();


  constructor(private reporteService:ClienteService){
   
    this.getMontoReport();
  }
  descomprimir(recibo:ReciboModel){
    return recibo.Detalle,
            recibo.FechaEntrega,
            recibo.Precio;
    console.log('entro al descomprimir ',recibo)
  }
  
 
getMontoReport(){
  this.reporteService.reporteMonto().subscribe({
    next:(respuesta)=>{
      console.log(respuesta);
      this.listaReporte=respuesta;
      console.log(this.listaReporte);
      crearTabla(this.listaReporte);
      
    for(const item in respuesta){
      this.listaCliente.push(respuesta[item].cliente);
    }
   

    console.log('Lista de clientes ',this.listaCliente);
    console.log('Lista de recibo ',this.listaRecibo);
    // respuesta.forEach(item=>{
    //   // this.listaCliente.push(item.cliente);
    //   // console.log(this.listaCliente);
    //   // this.listaRecibo.push(item.recibo);
    //   // console.log(this.listaRecibo);
    //   this.listaReporte.push(item);
    //   console.log(this.listaReporte);
      
    // });
    
    }
  })
}
}
