import test from 'ava';
import Reference from '../lib/Reference.js';

test('construct reference to primitive', t => {
  const changeBoolean = (bRef) => {
    bRef.set(true);
  };
  const bRef = new Reference(true);
  changeBoolean(bRef);
  t.true(bRef.get());
});
