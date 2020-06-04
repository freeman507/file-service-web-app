import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Arquivo } from '../models/Arquivo';

const endPoint = 'http://localhost:8080/arquivo';

@Injectable({
    providedIn: 'root'
})
export class ArquivoServiceService {

    constructor(private http: HttpClient) { }

    public findAll(): Promise<Arquivo[]> {
        return this.http.get<Arquivo[]>(`${endPoint}`).toPromise();
    }

    public download(arquivo: Arquivo): void {
        this.http.get(`${endPoint}/${arquivo.idArquivo}`, { responseType: 'blob' as 'json' }).subscribe(
            (response: any) => {
                let dataType = response.type;
                let binaryData = [];
                binaryData.push(response);
                let downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
                if (arquivo.nomeArquivo)
                    downloadLink.setAttribute('download', arquivo.nomeArquivo);
                document.body.appendChild(downloadLink);
                downloadLink.click();
            }
        )
    }
}
