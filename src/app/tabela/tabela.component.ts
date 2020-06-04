import { Component, OnInit } from '@angular/core';
import { ArquivoServiceService } from '../services/arquivo-service.service';
import { Arquivo } from '../models/Arquivo';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-tabela',
    templateUrl: './tabela.component.html',
    styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

    displayedColumns: string[] = ['idArquivo', 'nomeArquivo', 'download'];
    dataSource: MatTableDataSource<Arquivo>;

    constructor(
        private arquivoService: ArquivoServiceService
    ) { 
        this.dataSource = new MatTableDataSource<Arquivo>();
    }

    ngOnInit() {
        this.arquivoService.findAll().then((response: any) => {
            console.log(response);
            this.dataSource.data = response;
        }).catch((response) => {
            console.log(response);
        })
    }

    public downloadFile(arquivo: Arquivo) {
        this.arquivoService.download(arquivo);
    }
}
