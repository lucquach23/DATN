import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocphanComponent } from './hocphan.component';

describe('HocphanComponent', () => {
  let component: HocphanComponent;
  let fixture: ComponentFixture<HocphanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocphanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocphanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
