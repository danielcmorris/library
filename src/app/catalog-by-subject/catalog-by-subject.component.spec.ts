import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBySubjectComponent } from './catalog-by-subject.component';

describe('CatalogBySubjectComponent', () => {
  let component: CatalogBySubjectComponent;
  let fixture: ComponentFixture<CatalogBySubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogBySubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogBySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
