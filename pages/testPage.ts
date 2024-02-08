import { Page } from 'playwright/test'

export function TestPage(page: Page) {
  const input = page.locator('input[name="characters"]')
  const checkInputButton = page.locator('input[name="validate"]')

  return {
    input,
    checkInputButton,
  }
}
