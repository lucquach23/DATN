import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisPageComponent } from './regis-page.component';

describe('RegisPageComponent', () => {
  let component: RegisPageComponent;
  let fixture: ComponentFixture<RegisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
