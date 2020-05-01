import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrihaComponent } from './griha.component';

describe('GrihaComponent', () => {
  let component: GrihaComponent;
  let fixture: ComponentFixture<GrihaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrihaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrihaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
