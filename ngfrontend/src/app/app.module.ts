import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PapyriComponent } from './components/papyri/papyri.component';
import { PapyrusDetailsComponent } from './components/papyrus-details/papyrus-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlEncodePipePipe } from './pipes/url-encode-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PapyriComponent,
    PapyrusDetailsComponent,    
    UrlEncodePipePipe    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
