import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasteDagtakenComponent } from './vaste-dagtaken.component';

describe('VasteDagtakenComponent', () => {
  let component: VasteDagtakenComponent;
  let fixture: ComponentFixture<VasteDagtakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasteDagtakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasteDagtakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
