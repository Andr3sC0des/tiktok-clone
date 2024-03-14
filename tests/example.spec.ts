import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:4321')

  await expect(page).toHaveTitle(/TikTok - Make Your Day/)
})
