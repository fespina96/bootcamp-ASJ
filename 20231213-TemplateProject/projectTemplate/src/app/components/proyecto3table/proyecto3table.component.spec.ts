import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto3tableComponent } from './proyecto3table.component';

describe('Proyecto3tableComponent', () => {
  let component: Proyecto3tableComponent;
  let fixture: ComponentFixture<Proyecto3tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Proyecto3tableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Proyecto3tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
