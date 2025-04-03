import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/ApiService';
import { Observable } from 'rxjs';
import {map, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product$!:Observable<any>;
  constructor(private route:ActivatedRoute,private apiService:ApiService){}

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.apiService.getDataById(id))
    )
    
  }
}


