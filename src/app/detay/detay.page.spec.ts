import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetayPage } from './detay.page';

describe('DetayPage', () => {
  let component: DetayPage;
  let fixture: ComponentFixture<DetayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
