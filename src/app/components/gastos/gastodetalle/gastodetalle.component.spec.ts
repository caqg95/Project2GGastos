import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastodetalleComponent } from './gastodetalle.component';

describe('GastodetalleComponent', () => {
  let component: GastodetalleComponent;
  let fixture: ComponentFixture<GastodetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastodetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
