import { Observable, EventData, Page, TextField } from '@nativescript/core';
import { DemoSharedNativescriptMedallia } from '@demo/shared';
import {} from '@essent/nativescript-medallia';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedNativescriptMedallia {
  showSurveyNow() {
    const inputSurveyId = <TextField>this.page.getViewById('inputSurveyId');
    this.showSurvey(inputSurveyId.text);
  }

  showSurveyParams() {
    const params = {};
    const inputParameterName = <TextField>this.page.getViewById('inputParameterName');
    const inputParameterValue = <TextField>this.page.getViewById('inputParameterValue');
    params[inputParameterName.text] = inputParameterValue.text;
    this.setParams(params);
  }
}
