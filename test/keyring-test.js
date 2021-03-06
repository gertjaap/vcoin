/* eslint-env mocha */
/* eslint prefer-arrow-callback: "off" */

'use strict';

const assert = require('./util/assert');
const KeyRing = require('../lib/primitives/keyring');

const uncompressed = KeyRing.fromSecret(
  '5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss');

const compressed = KeyRing.fromSecret(
  'L4rK1yDtCWekvXuE6oXD9jCYfFNV2cWRpVuPLBcCU2z8TrisoyY1');

describe('KeyRing', function() {
  it('should get uncompressed public key', () => {
    assert.strictEqual(
      '04a34b99f22c790c4e36b2b3c2c35a36db06226e41c692fc82b8b56ac1c540c5bd5b'
      + '8dec5235a0fa8722476c7709c02559e3aa73aa03918ba2d492eea75abea235',
      uncompressed.getPublicKey('hex'));
  });

  it('should get uncompressed public key address', () => {
    assert.strictEqual(
      'VrZmfSv6zcTsXDUTh1aj1E5pVsNZEX5giL',
      uncompressed.getKeyAddress('base58'));
  });

  it('should get uncompressed WIF', () => {
    assert.strictEqual(
      '5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss',
      uncompressed.toSecret());
  });

  it('should get compressed public key', () => {
    assert.strictEqual(
      '03a34b99f22c790c4e36b2b3c2c35a36db06226e41c692fc82b8b56ac1c540c5bd',
      compressed.getPublicKey('hex'));
  });

  it('should get compressed public key address', () => {
    assert.strictEqual(
      'Vp3h5UG2JkENYZdGMpnShAHk4riTjSTXCB',
      compressed.getKeyAddress('base58'));
  });

  it('should get compressed WIF', () => {
    assert.strictEqual(
      'L4rK1yDtCWekvXuE6oXD9jCYfFNV2cWRpVuPLBcCU2z8TrisoyY1',
      compressed.toSecret());
  });
});
