import { TestBed } from '@angular/core/testing';

import { MailsenderService } from './mailsender.service';

describe('MailsenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailsenderService = TestBed.get(MailsenderService);
    expect(service).toBeTruthy();
  });
});
