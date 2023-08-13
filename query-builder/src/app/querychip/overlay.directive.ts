import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, EventEmitter, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { merge, Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[querChipOverlay]',
  host: {
    '(click)': 'toggleOverlay($event)',
    '(keydown.enter)': 'toggleOverlay($event)'
  },
  exportAs: 'querChipOverlay'
})
export class QueryChipOverlayDirective {
  private isOverlayOpen = false;
  private overlayRef!: OverlayRef;
  private overlayClosingActionsSub = Subscription.EMPTY;

  @Input('querChipOverlay') public overlayrPanel!: TemplateRef<any>;

  @Input('textInput') textInput!: HTMLDivElement;

  @Output() overlayChanged = new EventEmitter<boolean>();

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  toggleOverlay(event: Event): void {
    event.preventDefault();
    if (this.isOverlayOpen) {
      this.destroyOverlay();
    }
    this.openOverlay();
  }

  openOverlay(): void {
    this.isOverlayOpen = true;
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.textInput)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
            offsetY: 8,
            offsetX: 0
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
            offsetY: -8,
            offsetX: 0
          }
        ])
    });
    const templatePortal = new TemplatePortal(this.overlayrPanel, this.viewContainerRef);
    this.overlayRef.attach(templatePortal);
    this.overlayClosingActionsSub = this.overlayClosingActions().subscribe(() => this.destroyOverlay());
    (document.querySelector('.mat-calendar-body-active') as HTMLElement)?.focus();
    this.overlayChanged.emit(true);
  }

  private overlayClosingActions(): Observable<MouseEvent | void> {
    const backdropClick$ = this.overlayRef.backdropClick();
    const detachment$ = this.overlayRef.detachments();
    return merge(backdropClick$, detachment$);
  }

  destroyOverlay(): void {
    if (!this.overlayRef || !this.isOverlayOpen) {
      return;
    }
    this.overlayClosingActionsSub.unsubscribe();
    this.isOverlayOpen = false;
    this.overlayRef.detach();
    this.overlayChanged.emit(false);
  }

  ngOnDestroy(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}
