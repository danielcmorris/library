import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

 @Injectable()
export class Settings {
   
    get ApiEndpoint(){return environment.API_URL  }
    get ImageServerEndpoint(){ return environment.IMAGE_URL}
          
}

