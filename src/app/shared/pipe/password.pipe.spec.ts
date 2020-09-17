import { PasswordPipe } from './password.pipe';

describe('PasswordPipePipe', () => {
  it('create an instance', () => {
    const pipe = new PasswordPipe();
    expect(pipe).toBeTruthy();
  });
});
