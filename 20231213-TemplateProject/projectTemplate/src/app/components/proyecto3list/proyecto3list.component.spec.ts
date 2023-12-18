import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto3listComponent } from './proyecto3list.component';

describe('Proyecto3listComponent', () => {
  let component: Proyecto3listComponent;
  let fixture: ComponentFixture<Proyecto3listComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Proyecto3listComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Proyecto3listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
