import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangbieuComponent } from './bangbieu.component';

describe('BangbieuComponent', () => {
  let component: BangbieuComponent;
  let fixture: ComponentFixture<BangbieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangbieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangbieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
