import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerarchPokemonComponent } from './serarch-pokemon.component';

describe('SerarchPokemonComponent', () => {
  let component: SerarchPokemonComponent;
  let fixture: ComponentFixture<SerarchPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerarchPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerarchPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
