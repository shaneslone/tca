import { fixLinks } from './fixLinks';

test('fix links correctly replaces http with https', () => {
  const url = 'http://www.test.com/first, http://www.test.com/last';
  const expected = 'https://www.test.com/first, https://www.test.com/last';
  const fixedUrl = fixLinks(url);

  expect(fixedUrl).toEqual(expected);
});
