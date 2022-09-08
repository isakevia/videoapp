import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComoTreinarSeuDragaoPage } from './como-treinar-seu-dragao.page';

describe('ComoTreinarSeuDragaoPage', () => {
  let component: ComoTreinarSeuDragaoPage;
  let fixture: ComponentFixture<ComoTreinarSeuDragaoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoTreinarSeuDragaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComoTreinarSeuDragaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
