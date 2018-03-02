import { ClientFunction, Role } from 'testcafe';

/**
 * Helper functions
 */
export const getBrowserTitle = ClientFunction(() => document.title);

/**
 * Authentication handling example
 */
const regularUser = Role(`${process.env.HOST}/#/login`, async (t) => {
  await t
    .click('.login__button button')
    .typeText('.ui-inputfield', process.env.EMAIL)
    .click('.submitButton')
    .typeText('.ui-inputfield', process.env.PASSWORD)
    .click('.submitButton');
}, { preserveUrl: true });

export const handleAuthentication = async (t: TestController) => {
  await t.useRole(regularUser);
};
