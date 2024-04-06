import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('should reverse string', () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
