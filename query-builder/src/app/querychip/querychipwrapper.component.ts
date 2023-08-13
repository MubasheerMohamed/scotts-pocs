import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-querychip-wrapper',
  template: `
      <div class="chip-container" #chipContainer>
        <div class="chip-title">label</div>
        <div class="chip-operator">Operator</div>
        <div class="chip-value" [querChipOverlay]="overlayContent" [textInput]="chipContainer">
            <span>
              {{name}}
            ⌄</span>
        </div>
        <button (click)="close()">×</button>
      </div>
      <ng-template #overlayContent>
        <ng-content></ng-content>
      </ng-template>
  `,
  styles: [`
    .chip-container {
      border-radius: 4px;
      border: 1px solid var(--interface-border-1, #D2D8DB);
      background: var(--base-fff, #FFF);
      display: flex;
      align-items: center;
    }

    .chip-title {
      background: var(--interface-background-125, #DBE6F0);
      display: flex;
      height: 28px;
      padding: 0px 8px;
      align-items: center;
      gap: 8px;
    }

    .chip-operator {
      display: flex;
      height: 28px;
      padding: 0px 8px;
      align-items: center;
      gap: 4px;
    }

    .chip-value {
      display: flex;
      height: 28px;
      padding: 0px 8px;
      align-items: center;
      gap: 4px;
      background: var(--global-state-inactive-text, #3F5C69);
      min-width: 20px;
    }
  `]
})
export class QuerychipwrapperComponent {

  @Input() show = false;

  @Input() name: string = 'default';

  @Output() closeEvent = new EventEmitter();

  close(){
    this.closeEvent.emit();
  }

}
