import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CogniBetaComponent } from './cogni-beta.component';

describe('CogniBetaComponent', () => {
  let component: CogniBetaComponent;
  let fixture: ComponentFixture<CogniBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CogniBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CogniBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
