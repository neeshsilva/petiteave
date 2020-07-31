import { element, by, ElementFinder } from 'protractor';

export class FeedbackComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-feedback div table .btn-danger'));
  title = element.all(by.css('jhi-feedback div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getText();
  }
}

export class FeedbackUpdatePage {
  pageTitle = element(by.id('jhi-feedback-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  feedbackInput = element(by.id('field_feedback'));
  likeSelect = element(by.id('field_like'));

  customerSelect = element(by.id('field_customer'));
  productSelect = element(by.id('field_product'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setFeedbackInput(feedback: string): Promise<void> {
    await this.feedbackInput.sendKeys(feedback);
  }

  async getFeedbackInput(): Promise<string> {
    return await this.feedbackInput.getAttribute('value');
  }

  async setLikeSelect(like: string): Promise<void> {
    await this.likeSelect.sendKeys(like);
  }

  async getLikeSelect(): Promise<string> {
    return await this.likeSelect.element(by.css('option:checked')).getText();
  }

  async likeSelectLastOption(): Promise<void> {
    await this.likeSelect.all(by.tagName('option')).last().click();
  }

  async customerSelectLastOption(): Promise<void> {
    await this.customerSelect.all(by.tagName('option')).last().click();
  }

  async customerSelectOption(option: string): Promise<void> {
    await this.customerSelect.sendKeys(option);
  }

  getCustomerSelect(): ElementFinder {
    return this.customerSelect;
  }

  async getCustomerSelectedOption(): Promise<string> {
    return await this.customerSelect.element(by.css('option:checked')).getText();
  }

  async productSelectLastOption(): Promise<void> {
    await this.productSelect.all(by.tagName('option')).last().click();
  }

  async productSelectOption(option: string): Promise<void> {
    await this.productSelect.sendKeys(option);
  }

  getProductSelect(): ElementFinder {
    return this.productSelect;
  }

  async getProductSelectedOption(): Promise<string> {
    return await this.productSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class FeedbackDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-feedback-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-feedback'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
