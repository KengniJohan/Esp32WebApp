import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewCardComponent } from './home-view-card.component';

describe('HomeViewCardComponent', () => {
  let component: HomeViewCardComponent;
  let fixture: ComponentFixture<HomeViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeViewCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
