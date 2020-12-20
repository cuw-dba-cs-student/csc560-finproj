import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PapyriComponent} from './components/papyri/papyri.component';
import { PapyrusDetailsComponent } from './components/papyrus-details/papyrus-details.component';


const routes: Routes = [  
  { path: 'allPapyri', component: PapyriComponent },
  { path: '',   redirectTo: '/allPapyri', pathMatch: 'full' },  
  { path: 'findByCentury/:century', component: PapyriComponent},
  { path: 'findByCategory/:cateogry', component: PapyriComponent},
  { path: 'addPapyrus', component: PapyrusDetailsComponent },
  { path: 'getPapyrus/:sign', component: PapyrusDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
