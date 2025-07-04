import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplementosAboutComponent } from './suplementos-about.component';

describe('SuplementosAboutComponent', () => {
  let component: SuplementosAboutComponent;
  let fixture: ComponentFixture<SuplementosAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuplementosAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuplementosAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
