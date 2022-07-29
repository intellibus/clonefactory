import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Clonefactory Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'clonefactory');
});

export const { run } = test;
