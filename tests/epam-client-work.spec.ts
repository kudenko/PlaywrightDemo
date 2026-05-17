import { test, expect } from '@playwright/test';

test('navigate to EPAM client work from Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: 'Services' }).hover();
  await page.getByRole('link', { name: 'Services' }).click();

  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work')).toBeVisible();
  await expect(page.getByText('Client Work')).toBeVisible();
});
