import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAboutTwoComponent } from './child-about-two.component';

describe('ChildAboutTwoComponent', () => {
  let component: ChildAboutTwoComponent;
  let fixture: ComponentFixture<ChildAboutTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAboutTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAboutTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
