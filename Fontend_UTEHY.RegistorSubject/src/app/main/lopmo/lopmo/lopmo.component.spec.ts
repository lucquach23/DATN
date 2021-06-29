import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LopmoComponent } from './lopmo.component';

describe('LopmoComponent', () => {
  let component: LopmoComponent;
  let fixture: ComponentFixture<LopmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LopmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LopmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
