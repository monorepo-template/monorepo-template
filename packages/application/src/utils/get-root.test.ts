import { describe, expect, it } from '@jest/globals';
import MISSING_ROOT_ERROR from '../constants/missing-root-error';
import getRoot from './get-root';

describe('getRoot', (): void => {
  it('should throw an error if the root is not found', (): void => {
    expect(getRoot).toThrowError(MISSING_ROOT_ERROR);
  });
});
