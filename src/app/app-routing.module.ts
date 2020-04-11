import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PortafolioDetalleComponent } from './pages/portafolio-detalle/portafolio-detalle.component';


const routes: Routes = [
{path: 'home', component: IndexComponent},
{path: 'sobre', component: SobreComponent},
{path: 'portafolio', component: PortafolioComponent},
{path: 'contacto', component: ContactoComponent},
{path: 'detalle', component: PortafolioDetalleComponent},
{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
