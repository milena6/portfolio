import { Page } from 'playwright/test'

export function TestPage(page: Page) {
  const input = page.locator('input[name="characters"]')
  const checkInputButton = page.locator('input[name="validate"]')
  const validationMessage = page.locator('input[name="validation_message"]')

  return {
    input,
    checkInputButton,
    validationMessage,
  }
}
