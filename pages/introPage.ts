import { Page } from 'playwright/test'

export function IntroPage(page: Page) {
  const chartLink = page.getByText('7 Char Val Validation')

  return {
    chartLink,
  }
}
