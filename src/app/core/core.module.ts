import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { loadSvgResources } from '../utils/svg.util';

@NgModule({
  declarations: [
    HeaderComponent, 
    SidebarComponent, 
    FooterComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports:[
    HeaderComponent, 
    SidebarComponent, 
    FooterComponent
  ]
})
export class CoreModule { 
  // SkipSelf 避免循环依赖
  // Optional 依赖为可选，没加载就加载，避免因为使用了SkipSelf而不加载模块的问题 
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已存在，不能再次加载！');
    }
    loadSvgResources(ir,ds);
  }
}
