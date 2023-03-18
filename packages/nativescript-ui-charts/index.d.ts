import { UIChartsViewBase } from './common';
export declare class UIChartsView extends UIChartsViewBase {
  _chartInitialized: boolean;
  setOptions(opts: any): void;
  setLangOptions(opts: any): void;
  updateOptions(opts: any): void;
  setExtremes(newMin: any, newMax: any, xAxisIndex?: number): void;
  enableAnnotationsModule(): void;
}
