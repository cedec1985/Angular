import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1uComponent } from './comp1u.component';

describe('Comp1uComponent', () => {
  let component: Comp1uComponent;
  let fixture: ComponentFixture<Comp1uComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp1uComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comp1uComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
