import { CaptchaEndpointPipe } from './captcha-endpoint.pipe';

describe('CaptchaEndpointPipe', () => {
  it('create an instance', () => {
    const pipe = new CaptchaEndpointPipe();
    expect(pipe).toBeTruthy();
  });
});
