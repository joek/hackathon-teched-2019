import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { KymaModule } from '@spartacus/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {baseUrl: 'https://localhost:9002',
          prefix: '/rest/v2/'
        }
      },
      context: {
        baseSite: ['electronics']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '1.2'
      }
    }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {baseUrl: 'https://api.crz8nbwca-internalc6-d20-public.model-t.cc.commerce.ondemand.com',
          prefix: '/rest/v2/'
        },
        media: {
          baseUrl: 'https://accstorefront.crz8nbwca-internalc6-d20-public.model-t.cc.commerce.ondemand.com'
        }
      },
      authentication: {
        kyma_enabled: true,
        kyma_client_id: 'client4kyma',
        kyma_client_secret: 'secret',
      },
      context: {
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '1.2'
      }
    }),
    KymaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
