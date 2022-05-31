import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'novedades',
    templateUrl: 'novedades.component.html'
})
export class NovedadesComponent implements OnInit {
    novedades;

    Date=Date;
    constructor(private http: Http) {
        this.http.get('http://localhost:8000/novedades').subscribe(
            x=> {
                console.log(x);
                this.novedades = x;
            }
        )
    }

    ngOnInit() {}
}