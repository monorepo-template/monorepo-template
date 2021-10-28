import createRoot from './test-utils/create-root';

describe('App', (): void => {
  it('should render "Hello world"', async (): Promise<void> => {
    const root: HTMLElement = createRoot();
    await import('.');
    expect(root.textContent).toBe('Hello world');
  });
});
