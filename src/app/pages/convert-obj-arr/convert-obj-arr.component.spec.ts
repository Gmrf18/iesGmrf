import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertObjArrComponent } from './convert-obj-arr.component';

describe('ConvertObjArrComponent', () => {
  let component: ConvertObjArrComponent;
  let fixture: ComponentFixture<ConvertObjArrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertObjArrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertObjArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
