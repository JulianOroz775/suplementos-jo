import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplementosSuplementoComponent } from './suplementos-suplemento.component';

describe('SuplementosSuplementoComponent', () => {
  let component: SuplementosSuplementoComponent;
  let fixture: ComponentFixture<SuplementosSuplementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuplementosSuplementoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuplementosSuplementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
