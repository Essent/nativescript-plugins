import { DemoSharedBase } from '../utils';
import { Medallia } from '@essent/nativescript-medallia';
import { Dialogs, Page } from '@nativescript/core';

export class DemoSharedNativescriptMedallia extends DemoSharedBase {
  constructor(public page: Page) {
    super();
  }

  showSurvey(value: string) {
    Medallia.getMedalliaState().subscribe({
      next: (success: boolean) => {
        if (success) {
          this.showForm(value);
        }
      },
      error: (error: number) => {
        this.showError(error);
      },
    });
  }

  setParams(params: any) {
    Medallia.getMedalliaState().subscribe({
      next: (success: boolean) => {
        if (success) {
          this.setCustomParameter(params);
        }
      },
      error: (error: number) => {
        this.showError(error);
      },
    });
  }

  showForm(text: string) {
    Medallia.showForm(text).subscribe({
      next: (success: boolean) => {
        console.info('Medallia form sucessfuly shown? ' + success);
      },
      error: (error) => {
        this.showError(error);
      },
    });
  }

  setCustomParameter(params: any) {
    for (const key in params) {
      Medallia.setCustomParameter(key, params[key]);
    }
  }

  showError(error: number | string) {
    Dialogs.alert({
      title: 'Medallia error',
      message: '' + error,
      okButtonText: 'Close',
    }).then(() => {
      console.error('Medallia error occured: ' + error);
    });
  }
}
