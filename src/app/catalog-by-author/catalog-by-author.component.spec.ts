import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogByAuthorComponent } from './catalog-by-author.component';

describe('CatalogByAuthorComponent', () => {
  let component: CatalogByAuthorComponent;
  let fixture: ComponentFixture<CatalogByAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogByAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
