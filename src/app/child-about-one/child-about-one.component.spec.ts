import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAboutOneComponent } from './child-about-one.component';

describe('ChildAboutOneComponent', () => {
  let component: ChildAboutOneComponent;
  let fixture: ComponentFixture<ChildAboutOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAboutOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAboutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
