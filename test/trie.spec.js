(function() {

    var chai = require('chai');
    var expect = chai.expect;
    var Trie = require('./../src/module/trie.js');
    var filePath = './../src/dict/sample_words.txt';
    var trie = new Trie();

    describe('Spell Checker Testing', function() {

        beforeEach(function() {});

        it('Trie is initalized', function() {
            expect(typeof trie).to.equal('object');
            expect(typeof trie._add).to.equal('function');
            expect(trie.find('bite')).to.equal(null);
        });

        it('Add words to trie', function() {
            expect(trie.addSeries('a apple applepie add after bit bitten')).to.equal(true);
            expect(trie.add('bite')).to.equal(true);
            expect(trie.find('bite')).to.equal(true);
            expect(trie.find('ed')).to.equal(null);
            expect(trie.find('applepie')).to.equal(true);
            // console.log(Object.keys(trie.toObject()['a']), JSON.stringify(trie.toObject()['a']));
        });

        it('Add words to trie with file', function() {
            trie.build(filePath);
            expect(trie.find('aah')).to.equal(true);
        });
    });

})();
