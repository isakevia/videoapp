import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachCarterTreinoParaAVidaPage } from './coach-carter-treino-para-a-vida.page';

describe('CoachCarterTreinoParaAVidaPage', () => {
  let component: CoachCarterTreinoParaAVidaPage;
  let fixture: ComponentFixture<CoachCarterTreinoParaAVidaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCarterTreinoParaAVidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachCarterTreinoParaAVidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
