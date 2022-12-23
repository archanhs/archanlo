import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchanloNavbarComponent } from './archanlo-navbar.component';

describe('ArchanloNavbarComponent', () => {
  let component: ArchanloNavbarComponent;
  let fixture: ComponentFixture<ArchanloNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchanloNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchanloNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
