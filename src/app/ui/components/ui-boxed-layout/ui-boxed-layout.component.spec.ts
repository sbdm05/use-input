import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBoxedLayoutComponent } from './ui-boxed-layout.component';

describe('UiBoxedLayoutComponent', () => {
  let component: UiBoxedLayoutComponent;
  let fixture: ComponentFixture<UiBoxedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBoxedLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiBoxedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
