import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp12mComponent } from './comp12m.component';

describe('Comp12mComponent', () => {
  let component: Comp12mComponent;
  let fixture: ComponentFixture<Comp12mComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp12mComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comp12mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
