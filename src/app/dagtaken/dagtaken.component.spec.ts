import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DagtakenComponent } from './dagtaken.component';

describe('DagtakenComponent', () => {
  let component: DagtakenComponent;
  let fixture: ComponentFixture<DagtakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DagtakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DagtakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
