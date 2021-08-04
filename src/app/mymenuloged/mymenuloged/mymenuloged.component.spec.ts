import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymenulogedComponent } from './mymenuloged.component';

describe('MymenulogedComponent', () => {
  let component: MymenulogedComponent;
  let fixture: ComponentFixture<MymenulogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymenulogedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MymenulogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
