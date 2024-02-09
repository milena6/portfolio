import { test, expect } from '@playwright/test'
import { performInputValidationTest } from '../pages/steps/inputValidationSteps'
import { TestPage } from '../pages/testPage'

test.describe('Input validation tests', () => {
  const validValues = ['AAbb00*', 'ABCDEFG', '1234567']
  for (const value of validValues) {
    test(`testing happy path with ${value}`, async ({ page }) => {
      performInputValidationTest(page, value)
      const testPage = TestPage(page)
      await expect(testPage.validationMessage).toHaveValue('Valid Value')
    })
  }

  const invalidValues = ['AAbb00*8', 'ABCDEFG#', '123456 7', '', 'QWert6']
  for (const value of invalidValues) {
    test(`testing invalid input with ${value}`, async ({ page }) => {
      performInputValidationTest(page, value)
      const testPage = TestPage(page)
      await expect(testPage.validationMessage).toHaveValue('Invalid Value')
    })
  }
})
