import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanStatsComponent } from './kanban-stats.component';

describe('KanbanStatsComponent', () => {
  let component: KanbanStatsComponent;
  let fixture: ComponentFixture<KanbanStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KanbanStatsComponent]
    });
    fixture = TestBed.createComponent(KanbanStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
