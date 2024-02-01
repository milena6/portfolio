import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  retries: 1,
  workers: 2,
  reporter: 'html',

  use: {
    baseURL: 'https://testpages.eviltester.com/styled/apps/7charval/simple7charvalidation.html',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ]
});
