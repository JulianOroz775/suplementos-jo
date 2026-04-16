import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuplementoDataService } from '../suplemento-data.service';
import { Suplemento } from '../suplementos-lista/Suplemento';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-listar-suplemento',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './listar-suplemento.component.html',
    styleUrls: ['./listar-suplemento.component.scss']
})
export class ListarSuplementoComponent implements OnInit {

    suplemento!: Suplemento;

    constructor(
        private route: ActivatedRoute,
        private suplementoDataService: SuplementoDataService
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            const idNumber = Number(id); // 👈 convertir

            this.suplementoDataService.getOne(idNumber).subscribe(data => {
                this.suplemento = data!;
            });
        }
    }
}