import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestechComponent } from './destech.component';

describe('DestechComponent', () => {
  let component: DestechComponent;
  let fixture: ComponentFixture<DestechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
