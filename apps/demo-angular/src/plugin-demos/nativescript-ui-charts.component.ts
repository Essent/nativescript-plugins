import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptUiCharts } from '@demo/shared';
import {} from '@essent/nativescript-ui-charts';

@Component({
  selector: 'demo-nativescript-ui-charts',
  templateUrl: 'nativescript-ui-charts.component.html',
  styleUrls: ['./nativescript-ui-charts.component.scss'],
})
export class NativescriptUiChartsComponent {
  demoShared: DemoSharedNativescriptUiCharts;

  private pagingLimit = 4;
  public extremes = [0, this.pagingLimit - 1];
  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptUiCharts();
  }

  public incrementExtremes() {
    if (this.extremes[0] + this.pagingLimit >= 28) {
      return;
    }
    console.log('increment extremes');
    this.extremes = [this.extremes[0] + this.pagingLimit, this.extremes[1] + this.pagingLimit];
  }

  public decrementExtremes() {
    console.log('decrement extremes');

    if (this.extremes[0] === 0) {
      return;
    }

    this.extremes = [this.extremes[0] - this.pagingLimit, this.extremes[1] - this.pagingLimit];
  }
}
