import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JinNiuKuaiGouApplicationVueSharedLibsModule,
  JinNiuKuaiGouApplicationVueSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JinNiuKuaiGouApplicationVueSharedLibsModule, JinNiuKuaiGouApplicationVueSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JinNiuKuaiGouApplicationVueSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JinNiuKuaiGouApplicationVueSharedModule {
  static forRoot() {
    return {
      ngModule: JinNiuKuaiGouApplicationVueSharedModule
    };
  }
}
