import { TestBed } from '@angular/core/testing';

import { CaptchaHelperService } from './captcha-helper.service';

describe('CaptchaHelperService', () => {
  let service: CaptchaHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaptchaHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
