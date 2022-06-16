import {CommonLib} from "./CommonLib";

describe('commonlib', () => {
  it('should work', () => {
    const commonLib: CommonLib = new CommonLib();
    expect(commonLib.execute()).toEqual('commonlib');
  });
});
