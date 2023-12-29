import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp11mComponent } from './comp11m.component';

describe('Comp11mComponent', () => {
  let component: Comp11mComponent;
  let fixture: ComponentFixture<Comp11mComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp11mComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comp11mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
