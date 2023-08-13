import { Component, Input, ViewChild, TemplateRef } from "@angular/core";

@Component({
    selector: 'app-querychip',
    template: `
      <ng-template><ng-content></ng-content></ng-template>
    `,
    styles: [`
      
    `]
})
export class QuerychipComponent {
    @Input() show = false;

    @Input() name: string = 'default';  

    @ViewChild(TemplateRef) content: TemplateRef<unknown> | null = null;
}
