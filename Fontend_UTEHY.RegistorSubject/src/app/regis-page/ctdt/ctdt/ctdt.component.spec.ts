import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtdtComponent } from './ctdt.component';

describe('CtdtComponent', () => {
  let component: CtdtComponent;
  let fixture: ComponentFixture<CtdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
