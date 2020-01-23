const { expect } = require('chai');

const HashTable = require('../src/hashTable');

describe('Hash Table Implementation', () => {
  let table;
  beforeEach('Create new hash table', () => {
    table = new HashTable(17);
  });

  it('Get method returns value for given key', () => {
    table.set('maroon', '#800000');
    table.set('yellow', '#FFFF00');
    table.set('olive', '#808000');
    table.set('salmon', '#FA8072');
    table.set('lightcoral', '#F08080');
    table.set('mediumvioletred', '#C71585');
    table.set('plum', '#DDA0DD');

    expect(table.get('maroon')).to.equal('#800000');
    expect(table.get('yellow')).to.equal('#FFFF00');
    expect(table.get('olive')).to.equal('#808000');
    expect(table.get('salmon')).to.equal('#FA8072');
    expect(table.get('lightcoral')).to.equal('#F08080');
    expect(table.get('mediumvioletred')).to.equal('#C71585');
    expect(table.get('plum')).to.equal('#DDA0DD');
    expect(table.get('blue')).to.equal(undefined);
    expect(table.get('')).to.equal(undefined);
  });

  it('Keys method returns array of all unique keys in the table', () => {
    table.set('maroon', '#800000');
    table.set('yellow', '#FFFF00');
    table.set('yellow', '#GGGTTT');
    table.set('olive', '#808000');
    table.set('olive', '#999999');
    table.set('salmon', '#FA8072');
    table.set('lightcoral', '#F08080');
    table.set('mediumvioletred', '#C71585');
    table.set('plum', '#DDA0DD');

    let keys = table.keys();
    expect(keys.length).to.equal(7);
    expect(keys.includes('maroon')).to.equal(true);
    expect(keys.includes('yellow')).to.equal(true);
    expect(keys.includes('olive')).to.equal(true);
    expect(keys.includes('salmon')).to.equal(true);
    expect(keys.includes('lightcoral')).to.equal(true);
    expect(keys.includes('mediumvioletred')).to.equal(true);
    expect(keys.includes('plum')).to.equal(true);
    expect(keys.includes('blue')).to.equal(false);
  });

  it('Values method returns array of all unique keys in the table', () => {
    table.set('maroon', '#800000');
    table.set('yellow', '#FFFF00');
    table.set('yellow', '#GGGTTT');
    table.set('olive', '#808000');
    table.set('olive', '#999999');
    table.set('salmon', '#FA8072');
    table.set('lightcoral', '#F08080');
    table.set('mediumvioletred', '#C71585');
    table.set('plum', '#DDA0DD');
    table.set('red', '#DDA0DD');

    let values = table.values();
    expect(values.length).to.equal(9);
    expect(values.includes('#800000')).to.equal(true);
    expect(values.includes('#FFFF00')).to.equal(true);
    expect(values.includes('#GGGTTT')).to.equal(true);
    expect(values.includes('#808000')).to.equal(true);
    expect(values.includes('#999999')).to.equal(true);
    expect(values.includes('#FA8072')).to.equal(true);
    expect(values.includes('#F08080')).to.equal(true);
    expect(values.includes('#C71585')).to.equal(true);
    expect(values.includes('#DDA0DD')).to.equal(true);
    expect(values.includes('#TTTTTT')).to.equal(false);
  });
});
