import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { PetiteaveTestModule } from '../../../test.module';
import { FeedbackDetailComponent } from 'app/entities/feedback/feedback-detail.component';
import { Feedback } from 'app/shared/model/feedback.model';

describe('Component Tests', () => {
  describe('Feedback Management Detail Component', () => {
    let comp: FeedbackDetailComponent;
    let fixture: ComponentFixture<FeedbackDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ feedback: new Feedback(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [PetiteaveTestModule],
        declarations: [FeedbackDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(FeedbackDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(FeedbackDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load feedback on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.feedback).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });

    describe('byteSize', () => {
      it('Should call byteSize from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'byteSize');
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.byteSize(fakeBase64);

        // THEN
        expect(dataUtils.byteSize).toBeCalledWith(fakeBase64);
      });
    });

    describe('openFile', () => {
      it('Should call openFile from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'openFile');
        const fakeContentType = 'fake content type';
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.openFile(fakeContentType, fakeBase64);

        // THEN
        expect(dataUtils.openFile).toBeCalledWith(fakeContentType, fakeBase64);
      });
    });
  });
});
