import astroPlugin from './index';

describe('angularVitePlugin', () => {
  it('should return astro configurations', () => {
    expect(astroPlugin().name).toEqual('@analogjs/astro-integration-angular');
    expect(astroPlugin().hooks).toStrictEqual({
      'astro:config:setup': expect.anything(),
    });
  });
});