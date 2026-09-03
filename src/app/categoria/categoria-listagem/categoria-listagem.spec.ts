import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaListagem } from './categoria-listagem';

describe('CategoriaListagem', () => {
  let component: CategoriaListagem;
  let fixture: ComponentFixture<CategoriaListagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaListagem],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaListagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
