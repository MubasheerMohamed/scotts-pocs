import { Component } from '@angular/core';
import { DefaultMatCalendarRangeStrategy, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
@Component({
  selector: 'app-root',
  template: `
    <app-querybuilder>
      <app-querychip [show]="true" [name]="'Datepicker'">
        <div style="width:328px;background: #fff;border: 1px solid #d2d8db;box-shadow: 0 4px 6px #0000003d;border-radius: 0.25rem;">
          <sol-calendar></sol-calendar>
        </div>
      </app-querychip>
      <app-querychip [name]="'Range slider'">
      <div style="width:328px;padding:20px;background: #fff;border: 1px solid #d2d8db;box-shadow: 0 4px 6px #0000003d;border-radius: 0.25rem;">
        <sol-range-slider
        [step]="step"
        [startPoints]="startPointsDefaultOnDrag"
        [enableTooltipOnDrag]="enableTooltipOnDrag"
        [connect]="connectOnDrag"
        [colorClasses]="colorClassesOnDrag"
        [enableArrow]="true">
        </sol-range-slider>
      </div>
      </app-querychip>
      <app-querychip [name]="'Daterange'">
        <div style="width:328px;background: #fff;border: 1px solid #d2d8db;box-shadow: 0 4px 6px #0000003d;border-radius: 0.25rem;">
          <sol-calendar [type]="'range-selection'"></sol-calendar>
        </div>
      </app-querychip>
      <app-querychip [show]="true" [name]="'Tagify'">
        <div style="width:328px;display:inline-block;background: #fff;border: 1px solid #d2d8db;box-shadow: 0 4px 6px #0000003d;border-radius: 0.25rem;">
            <sol-tagify
            [tags]="tags"
            [readonly]="false"
          ></sol-tagify>
        </div>
      </app-querychip>
    </app-querybuilder>

  `,
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy
    }
  ]
})
export class AppComponent {
  step = 1;
  enableTooltipOnDrag = true;
  startPointsDefaultOnDrag = [-30, -29, 0, 28, 29, 30];
  connectOnDrag = [true, true, true, true, true, true, true];
  colorClassesOnDrag = ['c-1-darkRed', 'c-2-mediumRed', 'c-3-lightRed', 'c-4-white', 'c-5-lightGreen', 'c-6-mediumGreen', 'c-7-darkGreen'];
  tags = [];
  /*
  model = [
    {
      filterId: 'teams',
      selectedValue: 100
    },
    {
      filterId: 'users',
      selectedValue: 200
    }

  ];
  */
  model = [];

  queryComponents = [
    {
      // id: 0,
      id: 'teams',
      componentName: 'singleSelect',
      description: 'Teams',
      componentConfig: {
        items: [
          { value: 'a1a1a1', label: 'Team A' },
          { value: 'b2b2b2', label: 'Team B' },
          { value: 'c3c3c3', label: 'Team C' }
        ]
      }
    },
    {
      // id: 1,
      id: 'users',
      componentName: 'multiSelect',
      description: 'Users'
    }
  ];
}
