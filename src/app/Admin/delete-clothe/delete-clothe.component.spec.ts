import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClotheComponent } from './delete-clothe.component';

describe('DeleteClotheComponent', () => {
  let component: DeleteClotheComponent;
  let fixture: ComponentFixture<DeleteClotheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClotheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
