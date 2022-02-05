/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import index from '../routes/index.svelte';
import { render } from '@testing-library/svelte';
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('Landing page works correctly', () => {
  test('Test if welcome message is visible', () => {
    const { getByText } = render(index);

    expect(getByText('Hi, my name is')).toBeInTheDocument();
  });
});
