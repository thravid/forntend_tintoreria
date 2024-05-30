import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';
import {ClienteModel} from '../models/cliente.model';
import {ClienteService} from'../services/cliente.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective,
    TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {


  listaClientes: ClienteModel[] = [];
  clienteEstructuraModelo:ClienteModel=new ClienteModel();


  constructor(private clienteService:ClienteService){
   
    this.getClientes();
  }

  getClientes(){
    this.clienteService.getTodosClientes().subscribe({
      next:(respuesta)=>{
        console.log(respuesta);
       // console.log('entro al console Hay otro problema');
        this.listaClientes=respuesta;
      },
      error :(error)=>{
        console.log(error);
      }
    })
  }
  guardarCliente(){
    this.clienteService.postAgregarClientes(this.clienteEstructuraModelo).subscribe({
      next:(respuesta)=>{
          console.log('guardado Exitosamente',respuesta);
          this.getClientes();
          this.clienteEstructuraModelo=new ClienteModel();
      },
      error :(error)=>{
        console.log(error);
      }
    })
  }
  eliminarCliente(cajaDatoCliente: ClienteModel){

    this.clienteService.EliminarCliente(cajaDatoCliente._id).subscribe({
      next:(respuesta)=>{
        console.log('cliente eliminado',respuesta);
        this.getClientes();
      },error :(error)=>{
        console.log(error);
      }
    })
   

  }
  guardarEditar(){
      if(this.clienteEstructuraModelo._id==''){
        this.guardarCliente();
      }else
      {
        this.editaCliente();
      }
  }
  BuscarDatosEditar(cajaDatoCliente:ClienteModel){
    this.clienteEstructuraModelo=cajaDatoCliente;
  }
  editaCliente(){

    
      this.clienteService.EditarCliente(this.clienteEstructuraModelo).subscribe({
        next:(respuesta)=>{

          console.log('Registrio Editado',respuesta);
          this.getClientes();

        },error :(error)=>{
          console.log(error);
        }
        
      })

  }
}
