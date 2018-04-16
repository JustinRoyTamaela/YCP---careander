import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientenBestandComponent } from './clienten-bestand.component';

describe('ClientenBestandComponent', () => {
  let component: ClientenBestandComponent;
  let fixture: ComponentFixture<ClientenBestandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientenBestandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientenBestandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
