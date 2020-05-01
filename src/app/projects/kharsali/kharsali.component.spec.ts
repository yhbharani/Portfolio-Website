import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KharsaliComponent } from './kharsali.component';

describe('KharsaliComponent', () => {
  let component: KharsaliComponent;
  let fixture: ComponentFixture<KharsaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KharsaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KharsaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
