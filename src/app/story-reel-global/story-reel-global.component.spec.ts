import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryReelGlobalComponent } from './story-reel-global.component';

describe('StoryReelGlobalComponent', () => {
  let component: StoryReelGlobalComponent;
  let fixture: ComponentFixture<StoryReelGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryReelGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReelGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
