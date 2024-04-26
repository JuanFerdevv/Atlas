import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoIdComponent } from './proyecto-id.component';

describe('ProyectoIdComponent', () => {
  let component: ProyectoIdComponent;
  let fixture: ComponentFixture<ProyectoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProyectoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
