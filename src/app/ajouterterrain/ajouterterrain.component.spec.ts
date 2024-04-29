import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterterrainComponent } from './ajouterterrain.component';

describe('AjouterterrainComponent', () => {
  let component: AjouterterrainComponent;
  let fixture: ComponentFixture<AjouterterrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterterrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterterrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
