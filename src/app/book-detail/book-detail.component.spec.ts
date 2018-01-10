import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
