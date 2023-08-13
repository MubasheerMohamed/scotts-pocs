import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import { SingleSelectComponent } from './editors/singleselect/singleselect.component';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover/popover.component';
import { QuerybuilderComponent } from './querybuilder/querybuilder.component';
import { FormsModule } from '@angular/forms';
import { QuerychipwrapperComponent } from './querychip/querychipwrapper.component';
import { MultiSelectComponent } from './editors/multiselect/multiseselect.component';
import { DropdownModule } from 'nice-solaris-ngx/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { QuerychipComponent } from './querychip/querychip.component';
import { QueryChipOverlayDirective } from './querychip/overlay.directive';
import { CalendarModule } from 'nice-solaris-ngx/calendar';
import { RangeSliderModule } from 'nice-solaris-ngx/range-slider';
import { TagifyModule } from 'nice-solaris-ngx/tagify';

@NgModule({
  declarations: [
    AppComponent,
    SingleSelectComponent,
    MultiSelectComponent,
    PopoverComponent,
    QuerybuilderComponent,
    QuerychipComponent,
    QuerychipwrapperComponent,
    QueryChipOverlayDirective
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    PortalModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    PortalModule,
    MatMenuModule,
    CalendarModule,
    RangeSliderModule,
    TagifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
