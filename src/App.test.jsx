import { describe, expect, test } from 'vitest';
import App from './App';
import { render, screen } from './test/testUtils';

describe('App', () => {
  test('the header title is visible', () => {
    render(<App />);
    expect(screen.getByText("The Quizzinator")).toBeInTheDocument()
  });
});