import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TaskAppModule } from './task-app.module';

platformBrowserDynamic()
  .bootstrapModule(TaskAppModule)
  .catch(err => console.error(err));
