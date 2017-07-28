import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import {ListaEmailComponent} from './listas_email/lista_email.component';
import {NovaListaEmailComponent} from './listas_email/nova_lista_email.component';
import {MensagemComponent} from './mensagem/mensagem.component';
import {NovaMensagemComponent} from './mensagem/novaMensagem.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'lista-email', component: ListaEmailComponent },
    { path: 'nova-lista-email', component: NovaListaEmailComponent },
    { path: 'mensagem', component: ListaEmailComponent },
    { path: 'nova-mensagem', component: NovaMensagemComponent },


    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    ListaEmailComponent,
    MensagemComponent,
    NovaMensagemComponent,
    NovaListaEmailComponent,
    UpgradeComponent
]
