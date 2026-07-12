import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObersableMainPage } from './obersable-main-page';

describe('ObersableMainPage', () => {
  let component: ObersableMainPage;
  let fixture: ComponentFixture<ObersableMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObersableMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObersableMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
