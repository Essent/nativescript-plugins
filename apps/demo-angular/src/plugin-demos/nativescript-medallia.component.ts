import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptMedallia } from '@demo/shared';
import {} from '@essent/nativescript-medallia';
import { Page, TextField } from '@nativescript/core';

@Component({
  selector: 'demo-nativescript-medallia',
  templateUrl: 'nativescript-medallia.component.html',
})
export class NativescriptMedalliaComponent {
  demoShared: DemoSharedNativescriptMedallia;

  constructor(public page: Page, private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptMedallia(this.page);
  }

  showSurveyNow() {
    const inputSurveyId = <TextField>this.page.getViewById('inputSurveyId');
    this.demoShared.showSurvey(inputSurveyId.text);
  }

  showSurveyParams() {
    const params = {};
    const inputParameterName = <TextField>this.page.getViewById('inputParameterName');
    const inputParameterValue = <TextField>this.page.getViewById('inputParameterValue');
    params[inputParameterName.text] = inputParameterValue.text;
    this.demoShared.setParams(params);
  }
}
