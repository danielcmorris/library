import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEditionsComponent } from './recent-editions.component';

describe('RecentEditionsComponent', () => {
  let component: RecentEditionsComponent;
  let fixture: ComponentFixture<RecentEditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentEditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentEditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
