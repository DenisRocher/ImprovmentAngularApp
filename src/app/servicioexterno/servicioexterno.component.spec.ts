import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioexternoComponent } from './servicioexterno.component';

describe('ServicioexternoComponent', () => {
  let component: ServicioexternoComponent;
  let fixture: ComponentFixture<ServicioexternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioexternoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioexternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
