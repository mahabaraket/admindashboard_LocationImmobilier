import { TestBed,inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { bienservice } from './biens.service';

describe('bienservice', () => {
  let service: bienservice;
TestBed.configureTestingModule({
  providers: [ bienservice ],
  imports: [ HttpClientModule ]

});
  

it('should be created', inject([bienservice], (service: bienservice) => {
  expect(service).toBeTruthy();
  }));
});
