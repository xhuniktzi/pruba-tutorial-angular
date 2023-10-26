import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesListaComponent } from './imagenes-lista.component';

describe('ImagenesListaComponent', () => {
  let component: ImagenesListaComponent;
  let fixture: ComponentFixture<ImagenesListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagenesListaComponent]
    });
    fixture = TestBed.createComponent(ImagenesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
