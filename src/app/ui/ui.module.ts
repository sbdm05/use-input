import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFullWidthComponent } from './components/ui-full-width/ui-full-width.component';
import { UiBoxedLayoutComponent } from './components/ui-boxed-layout/ui-boxed-layout.component';

@NgModule({
  declarations: [UiFullWidthComponent, UiBoxedLayoutComponent],
  imports: [CommonModule],
  exports: [UiFullWidthComponent, UiBoxedLayoutComponent],
})
export class UiModule {}
