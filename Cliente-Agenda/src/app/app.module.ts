import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Adicionado Manualmente
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaService } from './services/pessoa.service';
import { TesteSelecaoComponent } from './teste-selecao/teste-selecao.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    TesteSelecaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
