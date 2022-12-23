import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArchanloComponent } from './page-archanlo.component';

describe('PageArchanloComponent', () => {
  let component: PageArchanloComponent;
  let fixture: ComponentFixture<PageArchanloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageArchanloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageArchanloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
