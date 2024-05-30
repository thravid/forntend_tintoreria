import { ClienteModel } from "../models/cliente.model";
import { ReciboModel } from "../models/recibo.model";
cliente:new ClienteModel();
export class ReporteModel{
     recibo:ReciboModel=new ReciboModel();
    cliente:ClienteModel= new ClienteModel();
    montototal:number=0;
    desifrar(re:ReciboModel){
      return console.log('desde model  '+re)
    }

  };
  

    
    
    


