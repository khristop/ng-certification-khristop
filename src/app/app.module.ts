import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutesModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, CommonModule, AppRoutesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
