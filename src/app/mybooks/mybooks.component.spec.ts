import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybooksComponent } from './mybooks.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MybooksComponent', () => {
  let component: MybooksComponent;
  let fixture: ComponentFixture<MybooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybooksComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
