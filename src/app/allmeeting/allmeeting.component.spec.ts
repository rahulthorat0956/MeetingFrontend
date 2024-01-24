import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmeetingComponent } from './allmeeting.component';

describe('AllmeetingComponent', () => {
  let component: AllmeetingComponent;
  let fixture: ComponentFixture<AllmeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllmeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
