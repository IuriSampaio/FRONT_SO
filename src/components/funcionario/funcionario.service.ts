import { Api } from './../../services/api.service';
import { Injectable } from "@angular/core";

export interface IFuncionario{
    nome:String;
    age_nasc:Date;
}

@Injectable()
export class FuncionarioService {

    public funcionarios: Array<IFuncionario>;

    constructor(){
        this.getFuncionarios();
    }

    public async setFuncionario( funcionario: IFuncionario ) {
        
        if (funcionario.nome && funcionario.age_nasc){
            const newfuncionario = await new Api().request.post<IFuncionario>(
                '/funcionarios',
                {
                    nome:funcionario.nome,
                    age_nasc: funcionario.age_nasc
                }
            );
            
            if (newfuncionario.status == 201) {            
                this.funcionarios.push(newfuncionario.data);
                window.alert("Usuario "+newfuncionario.data.nome+" criado com sucesso");
            }else{
                window.alert("Erro "+newfuncionario.status+" ao adicionar usuario");
            }
        }else{
            window.alert("não foram passados dados o suficiente")
        }
    }

    public async getFuncionarios( ) {
        const funcs = await new Api().request.get<Array<IFuncionario>>('/funcionarios');

        this.funcionarios = funcs.data;
    }

}