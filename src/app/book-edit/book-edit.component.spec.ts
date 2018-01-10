import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEditComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
