import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-categories',
  templateUrl: './details-categories.component.html',
  styleUrls: ['./details-categories.component.css']
})
export class DetailsCategoriesComponent {
  description!:String;
constructor(private R:ActivatedRoute){}
ngOnInit()
{
  this.R.queryParamMap.subscribe(params=>this.description=String(params.get('desc')));
}
}
