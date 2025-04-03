import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../services/ApiService';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  // declare products array 
  //$: mark for observable
  //!: avoid undefined alert, promise it will be assigned with value before used
  //onInit would take care of the value assignment so won't be problem
  products$!: Observable<any[]>;

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    // didn't use subscribe caz observable + async takes care of subscription automatically
    this.products$ = this._apiService.getData().pipe(
      map(response => response.products)
    );
  }
}
