import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaComponent } from './entrega.component';

describe('EntregaComponent', () => {
  let component: EntregaComponent;
  let fixture: ComponentFixture<EntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
