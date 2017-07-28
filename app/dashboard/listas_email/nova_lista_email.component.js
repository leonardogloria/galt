"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var listaEmail_1 = require('../../model/listaEmail');
var NovaListaEmailComponent = (function () {
    function NovaListaEmailComponent() {
    }
    NovaListaEmailComponent.prototype.ngOnInit = function () {
        this.listaEmail = new listaEmail_1.ListaEmail();
        this.listaEmail.emails = [];
        var email = {
            name: "Leonardo Gloria",
            address: "contato@leonardogloria.com.br"
        };
        this.listaEmail.emails.push(email);
        console.log("Estou aqui");
    };
    NovaListaEmailComponent = __decorate([
        core_1.Component({
            selector: 'nova_lista_email-cmp',
            moduleId: module.id,
            templateUrl: 'nova_lista_email.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NovaListaEmailComponent);
    return NovaListaEmailComponent;
}());
exports.NovaListaEmailComponent = NovaListaEmailComponent;
//# sourceMappingURL=nova_lista_email.component.js.map