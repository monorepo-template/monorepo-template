import { act, renderHook } from '@testing-library/react-hooks';
import { useModule } from '..';

const TEST_VALUE = 'test value';

describe('useModule', (): void => {
  describe('setValue', (): void => {
    it('should set `value`', (): void => {
      const { result } = renderHook(useModule);

      act((): void => {
        result.current.setValue(TEST_VALUE);
      });

      expect(result.current.value).toBe(TEST_VALUE);
    });
  });

  describe('value', (): void => {
    it('should default to an empty string', (): void => {
      const { result } = renderHook(useModule);
      expect(result.current.value).toBe('');
    });

    it('should default to `defaultValue`', (): void => {
      const { result } = renderHook(useModule, {
        initialProps: {
          defaultValue: TEST_VALUE,
        },
      });

      expect(result.current.value).toBe(TEST_VALUE);
    });
  });
});
