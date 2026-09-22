import {Inject, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
export interface NovoContato {
    nome: string; email: string; mensagem: string;
}
export interface RespostaContato{
    sucesso:boolean; id:number; mensagem: string;
}

@Inject({providedIn: 'root'})
export class ContatoService{
    private http = inject(HttpClient);
    private url = 'http://localhost:8000/api/contato.php';
    enviar(dados: NovoContato): Observable<RespostaContato>{
        return this.http.post<RespostaContato>(this.url, dados)
    }
}
=
