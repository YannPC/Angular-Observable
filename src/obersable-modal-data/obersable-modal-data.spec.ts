import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObersableModalData } from './obersable-modal-data';

describe('ObersableModalData', () => {
  let component: ObersableModalData;
  let fixture: ComponentFixture<ObersableModalData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObersableModalData],
    }).compileComponents();

    fixture = TestBed.createComponent(ObersableModalData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
