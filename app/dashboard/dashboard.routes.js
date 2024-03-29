"use strict";
var home_component_1 = require('./home/home.component');
var user_component_1 = require('./user/user.component');
var icons_component_1 = require('./icons/icons.component');
var table_component_1 = require('./table/table.component');
var lista_email_component_1 = require('./listas_email/lista_email.component');
var nova_lista_email_component_1 = require('./listas_email/nova_lista_email.component');
var mensagem_component_1 = require('./mensagem/mensagem.component');
var novaMensagem_component_1 = require('./mensagem/novaMensagem.component');
var notifications_component_1 = require('./notifications/notifications.component');
var typography_component_1 = require('./typography/typography.component');
var maps_component_1 = require('./maps/maps.component');
var upgrade_component_1 = require('./upgrade/upgrade.component');
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'table', component: table_component_1.TableComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'typography', component: typography_component_1.TypographyComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: 'upgrade', component: upgrade_component_1.UpgradeComponent },
    { path: 'lista-email', component: lista_email_component_1.ListaEmailComponent },
    { path: 'nova-lista-email', component: nova_lista_email_component_1.NovaListaEmailComponent },
    { path: 'mensagem', component: lista_email_component_1.ListaEmailComponent },
    { path: 'nova-mensagem', component: novaMensagem_component_1.NovaMensagemComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    icons_component_1.IconsComponent,
    notifications_component_1.NotificationsComponent,
    typography_component_1.TypographyComponent,
    maps_component_1.MapsComponent,
    lista_email_component_1.ListaEmailComponent,
    mensagem_component_1.MensagemComponent,
    novaMensagem_component_1.NovaMensagemComponent,
    nova_lista_email_component_1.NovaListaEmailComponent,
    upgrade_component_1.UpgradeComponent
];
//# sourceMappingURL=dashboard.routes.js.map