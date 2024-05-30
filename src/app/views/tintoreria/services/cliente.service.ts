import {HttpClient} from"@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClienteModel } from "../models/cliente.model";
import { ReciboModel } from "../models/recibo.model";
import { ReporteModel } from "../models/reporte.model";

@Injectable({
    providedIn:'root'
})
export class ClienteService{
    private API_URL='http://localhost:3000/registroClientes';
    constructor(private http:HttpClient){

    }
    getTodosClientes():Observable<ClienteModel[]>{
        return this.http.get<ClienteModel[]>(`${this.API_URL}/traerClientes`);    
    }
    postAgregarClientes(registroCliente:ClienteModel):Observable<ClienteModel>{
        return this.http.post<ClienteModel>(`${this.API_URL}/registrarCliente`,registroCliente); 
    }
    EliminarCliente(idCliente:string):Observable<ClienteModel>{
        return this.http.delete<ClienteModel>(this.API_URL+'/eliminarClientes/'+idCliente);
    }
    EditarCliente(cajaDatos:ClienteModel):Observable<ClienteModel[]>{
        return this.http.put<ClienteModel[]>(this.API_URL+'/editarCliente/'+cajaDatos._id,cajaDatos);

    }
    reporteMonto():Observable<ReporteModel[]>{
        return this.http.get<ReporteModel[]>(`${this.API_URL}/MontoCliente`); 
    }
    getRecibo():Observable<ReciboModel[]>{
        return this.http.get<ReciboModel[]>(`${this.API_URL}/traerRegistros`);
    }
}
