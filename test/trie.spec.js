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
            expect(trie.add('apple')).to.equal(true);
            expect(trie.addSeries('apple applepie add after')).to.equal(true);
            expect(trie.find('apple')).to.equal(true);
            expect(trie.find('ed')).to.equal(null);
            expect(trie.find('applepie')).to.equal(true);
        });

        it.only('Add words to trie with file', function() {

            trie.build(filePath);
            // expect(trie.find('abreacting')).to.equal(true);
            // console.log(trie.toObject(), Object.keys(trie.toObject()['a']) , trie.find('abreacting'))
        });
    });



})();
