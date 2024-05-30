import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TintoreriaComponent } from './tintoreria.component';

describe('TintoreriaComponent', () => {
  let component: TintoreriaComponent;
  let fixture: ComponentFixture<TintoreriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TintoreriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TintoreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
