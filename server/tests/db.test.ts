import { test1 } from '../db/index';
test('Register User', () => {
    expect(test1(4, 3)).toBe(7);
});