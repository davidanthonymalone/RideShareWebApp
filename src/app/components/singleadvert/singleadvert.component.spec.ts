/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SingleadvertComponent } from './singleadvert.component';

describe('SingleadvertComponent', () => {
  let component: SingleadvertComponent;
  let fixture: ComponentFixture<SingleadvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleadvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleadvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
