import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetpoojaComponent } from './petpooja.component';

describe('PetpoojaComponent', () => {
  let component: PetpoojaComponent;
  let fixture: ComponentFixture<PetpoojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetpoojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetpoojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
