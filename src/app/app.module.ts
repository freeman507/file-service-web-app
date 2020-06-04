import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { TabelaComponent } from './tabela/tabela.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UploadComponent } from './upload/upload.component';
import { MatFileUploadModule } from 'angular-material-fileupload';

@NgModule({
    declarations: [
        AppComponent,
        TabelaComponent,
        UploadComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatTableModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        MatFileUploadModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
