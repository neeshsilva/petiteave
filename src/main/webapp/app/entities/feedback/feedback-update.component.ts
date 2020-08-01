import {Component, OnInit} from '@angular/core';
import {HttpResponse} from '@angular/common/http';

import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent} from 'ng-jhipster';

import {IFeedback, Feedback} from 'app/shared/model/feedback.model';
import {FeedbackService} from './feedback.service';
import {AlertError} from 'app/shared/alert/alert-error.model';
import {ICustomer} from 'app/shared/model/customer.model';
import {CustomerService} from 'app/entities/customer/customer.service';
import {IProduct} from 'app/shared/model/product.model';
import {ProductService} from 'app/entities/product/product.service';

type SelectableEntity = ICustomer | IProduct;

@Component({
    selector: 'jhi-feedback-update',
    templateUrl: './feedback-update.component.html',
})
export class FeedbackUpdateComponent implements OnInit {
    isSaving = false;
    customers: ICustomer[] = [];
    products: IProduct[] = [];
    errorMsg = "";
    authenticationError: boolean = false;

    customerProduct = true;

    editForm = this.fb.group({
        id: [],
        feedback: [],
        like: [],
        customer: [],
        product: [],
    });

    constructor(
        protected dataUtils: JhiDataUtils,
        protected eventManager: JhiEventManager,
        protected feedbackService: FeedbackService,
        protected customerService: CustomerService,
        protected productService: ProductService,
        protected activatedRoute: ActivatedRoute,
        private fb: FormBuilder
    ) {
    }


    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({feedback}) => {
            this.updateForm(feedback);

            this.customerService.query().subscribe((res: HttpResponse<ICustomer[]>) => (this.customers = res.body || []));

            this.productService.query().subscribe((res: HttpResponse<IProduct[]>) => (this.products = res.body || []));
        });
    }

    updateForm(feedback: IFeedback): void {
        this.editForm.patchValue({
            id: feedback.id,
            feedback: feedback.feedback,
            like: feedback.like,
            customer: feedback.customer,
            product: feedback.product,
        });
    }

    byteSize(base64String: string): string {
        return this.dataUtils.byteSize(base64String);
    }

    openFile(contentType: string, base64String: string): void {
        this.dataUtils.openFile(contentType, base64String);
    }

    setFileData(event: Event, field: string, isImage: boolean): void {
        this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe(null, (err: JhiFileLoadError) => {
            this.eventManager.broadcast(
                new JhiEventWithContent<AlertError>('petiteaveApp.error', {message: err.message})
            );
        });
    }

    previousState(): void {
        window.history.back();
    }

    save(): void {
        this.isSaving = true;
        const feedback = this.createFromForm();
        console.log("Feedback", feedback);
        if (feedback.id !== undefined) {
            this.subscribeToSaveResponse(this.feedbackService.update(feedback));
        } else {
            this.subscribeToSaveResponse(this.feedbackService.create(feedback));
        }
    }

    private createFromForm(): IFeedback {

        let customerObj: ICustomer = {name: this.editForm.get(['customer'])!.value};
        let productObj: IProduct = {name: this.editForm.get(['product'])!.value};

        return {
            ...new Feedback(),
            id: this.editForm.get(['id'])!.value,
            feedback: this.editForm.get(['feedback'])!.value,
            like: this.editForm.get(['like'])!.value,
            customer: customerObj,
            product: productObj,
        };
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IFeedback>>): void {
        result.subscribe(
            () => this.onSaveSuccess(),
            err => {
                this.errorMsg = JSON.stringify(err);
                this.onSaveError();
            }
        );
    }

    protected onSaveSuccess(): void {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError(): void {
        this.isSaving = false;
        this.authenticationError = true;
    }

    trackById(index: number, item: SelectableEntity): any {
        return item.id;
    }
}
