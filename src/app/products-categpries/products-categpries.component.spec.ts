import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategpriesComponent } from './products-categpries.component';

describe('ProductsCategpriesComponent', () => {
  let component: ProductsCategpriesComponent;
  let fixture: ComponentFixture<ProductsCategpriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCategpriesComponent]
    });
    fixture = TestBed.createComponent(ProductsCategpriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
