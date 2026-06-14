import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObersableData } from './obersable-data';

describe('ObersableData', () => {
  let component: ObersableData;
  let fixture: ComponentFixture<ObersableData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObersableData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObersableData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
