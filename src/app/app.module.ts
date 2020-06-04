import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { TabelaComponent } from './tabela/tabela.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        AppComponent,
        TabelaComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
