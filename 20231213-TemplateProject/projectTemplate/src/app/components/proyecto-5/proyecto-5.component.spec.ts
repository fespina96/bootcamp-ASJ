import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto5Component } from './proyecto-5.component';

describe('Proyecto5Component', () => {
  let component: Proyecto5Component;
  let fixture: ComponentFixture<Proyecto5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Proyecto5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Proyecto5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
