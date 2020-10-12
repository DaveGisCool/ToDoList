import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterToDosComponent } from './filter-to-dos.component';

describe('FilterToDosComponent', () => {
  let component: FilterToDosComponent;
  let fixture: ComponentFixture<FilterToDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterToDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
