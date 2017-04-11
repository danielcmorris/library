import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLineComponent } from './book-line.component';

describe('BookLineComponent', () => {
  let component: BookLineComponent;
  let fixture: ComponentFixture<BookLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
