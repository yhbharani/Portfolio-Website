import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaFontComponent } from './nasa-font.component';

describe('NasaFontComponent', () => {
  let component: NasaFontComponent;
  let fixture: ComponentFixture<NasaFontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaFontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
