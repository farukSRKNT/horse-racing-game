import { test, expect } from '@playwright/test'

test('horse list should be populated with 20 horses on application start', async ({ page }) => {
  await page.goto('/')

  // Wait for the horse list to be populated
  await expect(page.locator('h3:has-text("Horse List")')).toBeVisible()

  // Check that the table has exactly 20 horse rows
  const horseRows = page.locator('table tbody tr')
  await expect(horseRows).toHaveCount(20)
})
