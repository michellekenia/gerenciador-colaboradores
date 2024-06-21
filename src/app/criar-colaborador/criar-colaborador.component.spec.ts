import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarColaboradorComponent } from './criar-colaborador.component';

describe('CriarColaboradorComponent', () => {
  let component: CriarColaboradorComponent;
  let fixture: ComponentFixture<CriarColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarColaboradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
