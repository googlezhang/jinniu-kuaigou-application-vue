import { NgModule } from '@angular/core';

import { JinNiuKuaiGouApplicationVueSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JinNiuKuaiGouApplicationVueSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JinNiuKuaiGouApplicationVueSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JinNiuKuaiGouApplicationVueSharedCommonModule {}
