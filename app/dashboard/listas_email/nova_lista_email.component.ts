import { Component, OnInit } from '@angular/core';

import {Email,ListaEmail} from '../../model/listaEmail'
@Component({
    selector: 'nova_lista_email-cmp',
    moduleId: module.id,
    templateUrl: 'nova_lista_email.component.html'
})

export class NovaListaEmailComponent implements OnInit{
    listaEmail:ListaEmail
    ngOnInit(){
        this.listaEmail = new ListaEmail();
        this.listaEmail.emails = []
        let email:Email = {
            name: "Leonardo Gloria",
            address: "contato@leonardogloria.com.br"
        }
        this.listaEmail.emails.push(email)
        console.log("Estou aqui")
    }
}
