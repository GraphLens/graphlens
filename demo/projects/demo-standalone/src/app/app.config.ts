import {
    ApplicationConfig,
    importProvidersFrom,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { routes } from './app.routes';

import { MessageService } from './services/message.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HeroService } from './services/hero.service';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideRouter(routes),
        provideHttpClient(),
        importProvidersFrom(
            HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
        ),
        MessageService,
        HeroService
    ],
};
