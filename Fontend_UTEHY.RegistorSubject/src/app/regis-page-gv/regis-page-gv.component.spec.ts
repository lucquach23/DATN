import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisPageGVComponent } from './regis-page-gv.component';

describe('RegisPageGVComponent', () => {
  let component: RegisPageGVComponent;
  let fixture: ComponentFixture<RegisPageGVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisPageGVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisPageGVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
