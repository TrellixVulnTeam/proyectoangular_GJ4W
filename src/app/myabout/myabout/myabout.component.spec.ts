import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaboutComponent } from './myabout.component';

describe('MyaboutComponent', () => {
  let component: MyaboutComponent;
  let fixture: ComponentFixture<MyaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
