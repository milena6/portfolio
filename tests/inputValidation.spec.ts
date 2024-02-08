import { test, expect } from '@playwright/test'
import { performInputValidationTest } from '../pages/steps/inputValidationSteps'

test.describe('Input validation tests', () => {
  const validValues = ['AAbb00*', 'ABCDEFG', '1234567']
  for (const value of validValues) {
    test(`testing happy path with ${value}`, async ({ page }) => {
      performInputValidationTest(page, value)
      await expect(
        page.locator('input[name="validation_message"]'),
      ).toHaveValue('Valid Value')
    })
  }

  const invalidValues = ['AAbb00*8', 'ABCDEFG#', '123456 7', '', 'QWert6']
  for (const value of invalidValues) {
    test(`should give  with ${value}`, async ({ page }) => {
      performInputValidationTest(page, value)
      await expect(
        page.locator('input[name="validation_message"]'),
      ).toHaveValue('Invalid Value')
    })
  }
})
