(function() {

    var chai = require('chai');
    var expect = chai.expect;
    var Trie = require('./../src/module/trie.js');
    var filePath = './src/dict/sample_words.txt';
    var trie = new Trie();

    describe('Tie DS Testing', function() {

        beforeEach(function() {});

        it('Trie is initalized', function() {
            expect(typeof trie).to.equal('object');
            expect(typeof trie._add).to.equal('function');
            expect(trie.find('bite')).to.equal(null);
        });

        it('Add words to trie', function() {
            expect(trie.addSeries('ass assist assatepit ate bit bittens bittenpitted bittenpitteds bittter pie pit pitteds ted ten')).to.equal(true);
            expect(trie.add('bit')).to.equal(true);
            expect(trie.find('ted')).to.equal(true);
            expect(trie.find('ed')).to.equal(null);
            expect(trie.find('bittenpitted')).to.equal(true);
        });

        it('Add words to trie with file', function() {
            trie.build(filePath);
            expect(trie.find('aah')).to.equal(true);
        });
    });

})();
