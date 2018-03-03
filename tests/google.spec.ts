import { config } from 'dotenv';
import { ClientFunction, Selector } from 'testcafe';

import { getBrowserTitle, handleAuthentication } from './helper';

config();

fixture`Google`
  .page(process.env.HOST);
  // .beforeEach(async t => {
  //   await handleAuthentication(t);
  // });

test('Should display google start page', async (t) => {

  const title = await getBrowserTitle();
  await t
    .expect(title).eql('Google');
});

test('Should show results for e2e testing', async (t) => {

  const searchTerm = 'e2e testing';
  const searchInput = Selector('#lst-ib');

  await t
    .typeText(searchInput, searchTerm);

  const searchButton = Selector('input[name=btnK]');

  await t
    .click(searchButton);

  const title = await getBrowserTitle();
  await t
    .expect(title).contains(searchTerm);
});
