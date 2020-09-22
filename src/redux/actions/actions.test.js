import moxios from 'moxios';

describe('getSecretWord action creator', () => {
  breforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds response word to state', () => {

  });
})