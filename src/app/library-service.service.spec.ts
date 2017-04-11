import { TestBed, inject } from '@angular/core/testing';

import { LibraryServiceService } from './library-service.service';

describe('LibraryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryServiceService]
    });
  });

  it('should ...', inject([LibraryServiceService], (service: LibraryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
