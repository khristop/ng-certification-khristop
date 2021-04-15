import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MeasureUnitPipe } from "./pipes/measure-unit.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [MeasureUnitPipe],
  exports: [MeasureUnitPipe]
})
export class SharedModule {}
