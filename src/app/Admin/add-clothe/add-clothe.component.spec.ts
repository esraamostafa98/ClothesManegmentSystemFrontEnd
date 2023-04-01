import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClotheComponent } from './add-clothe.component';

describe('AddClotheComponent', () => {
  let component: AddClotheComponent;
  let fixture: ComponentFixture<AddClotheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClotheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
