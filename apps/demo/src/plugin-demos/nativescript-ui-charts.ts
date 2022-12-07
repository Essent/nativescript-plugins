import { isAndroid } from '@nativescript/core';
import { fromObject } from '@nativescript/core/data/observable';
import Theme from '@nativescript/theme';

const viewModel = fromObject({
  selectedType: 'Line',
  chartTypes: [{ type: 'Line' }, { type: 'Area' }, { type: 'Bar' }, { type: 'Column' }, { type: '3D' }, { type: 'Tests' }],
  lineChart: [
    {
      name: 'Basic Line Chart (async data)',
      route: './plugin-demos/nativescript-ui-charts/line-charts/basic-line/basic-line-page',
    },
    {
      name: 'With Data Labels',
      route: './plugin-demos/nativescript-ui-charts/line-charts/with-data-labels/with-data-labels-page',
    },
    {
      name: 'Time data with irregular intervals (styled)',
      route: './plugin-demos/nativescript-ui-charts/line-charts/spline-irregular-time/spline-irregular-time-page',
    },
  ],
  areaChart: [
    {
      name: 'Basic Area Chart',
      route: './plugin-demos/nativescript-ui-charts/area-charts/basic-area/basic-area-page',
    },
    {
      name: 'Stacked Area Chart',
      route: './plugin-demos/nativescript-ui-charts/area-charts/area-stacked/area-stacked-page',
    },
    {
      name: 'Area Range Chart',
      route: './plugin-demos/nativescript-ui-charts/area-charts/area-ranged/area-ranged-page',
    },
    {
      name: 'Percentage Area Chart',
      route: './plugin-demos/nativescript-ui-charts/area-charts/area-stacked-percent/area-stacked-percent-page',
    },
    {
      name: 'Area Spline Chart',
      route: './plugin-demos/nativescript-ui-charts/area-charts/area-spline/area-spline-page',
    },
  ],
  barChart: [
    {
      name: 'Basic Bar Chart',
      route: './plugin-demos/nativescript-ui-charts/bar-charts/basic-bar/basic-bar-page',
    },
    {
      name: 'Stacked Bar Chart',
      route: './plugin-demos/nativescript-ui-charts/bar-charts/bar-stacked/bar-stacked-page',
    },
    {
      name: 'Bar With Negative Stack Chart',
      route: './plugin-demos/nativescript-ui-charts/bar-charts/bar-negative-stack/bar-negative-stack-page',
    },
  ],
  columnChart: [
    {
      name: 'Basic Column Chart',
      route: './plugin-demos/nativescript-ui-charts/column-charts/basic-column/basic-column-page',
    },
    {
      name: 'Stacked Column Chart',
      route: './plugin-demos/nativescript-ui-charts/column-charts/column-stacked/column-stacked-page',
    },
  ],
  '3dChart': [
    {
      name: '3D Column Chart',
      route: './plugin-demos/nativescript-ui-charts/3d-charts/3d-column/3d-column-page',
    },
    {
      name: '3D Column Chart with Stacking and Grouping',
      route: './plugin-demos/nativescript-ui-charts/3d-charts/3d-column-sg/3d-column-sg-page',
    },
    // doesn't render currently
    // {
    //   name: '3D Cylinder Chart',
    //   route: './plugin-demos/nativescript-ui-charts/3d-charts/3d-cylinder/3d-cylinder-page',
    // },
    {
      name: '3D Donut Chart',
      route: './plugin-demos/nativescript-ui-charts/3d-charts/3d-donut/3d-donut-page',
    },
    {
      name: '3D Pie Chart',
      route: 'demos/3d-charts/3d-pie/3d-pie-page',
    },
    // doesn't render currently
    // {
    //   name: '3D Pyramid Chart',
    //   route: './plugin-demos/nativescript-ui-charts/3d-charts/3d-pyramid/3d-pyramid-page',
    // },

    // TODO: implement dragging
    {
      name: '3D Scatter Chart',
      route: './plugin-demos/nativescript-ui-charts/3d-charts/3d-scatter-draggable/3d-scatter-draggable-page',
    },
  ],
  testsChart: [
    {
      name: 'Dynamic Chart Height',
      route: './plugin-demos/nativescript-ui-charts/tests/dynamic-chart-height/dynamic-chart-height-page',
    },
  ],
  selectedSource: [],
  onItemTap(args) {
    const demo = this.selectedSource[args.index];
    args.object.page.frame.navigate(demo.route);
  },
  onSelectCategory(args) {
    const chartType = args.object.text.toLowerCase() + 'Chart';

    if (viewModel[chartType]) {
      console.log('selected chart type:', `${args.object.text}`);
      viewModel.set('selectedType', `${args.object.text}`);
      viewModel.set('selectedSource', viewModel[chartType]);
    } else {
      console.log('Chart type', chartType, 'not implemented');
    }
  },
});

export function onNavigatedTo(args) {
  if (args.isBackNavigation) return;

  viewModel.set('selectedSource', viewModel.get('lineChart'));
  args.object.bindingContext = viewModel;
}