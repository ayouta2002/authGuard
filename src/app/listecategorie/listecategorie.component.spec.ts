import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecategorieComponent } from './listecategorie.component';

describe('ListecategorieComponent', () => {
  let component: ListecategorieComponent;
  let fixture: ComponentFixture<ListecategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListecategorieComponent]
    });
    fixture = TestBed.createComponent(ListecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
