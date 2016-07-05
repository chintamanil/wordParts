(function() {

    var chai = require('chai');
    var expect = chai.expect;
    var Trie = require('./../src/module/trie.js');
    var filePath = './src/dict/sample_words.txt';
    var trie = new Trie();
  var wordSeries = 'aa ab as er ers ass at he is tic atheistic aardwolf aa assist assatepit ate bit bitten bittenpit bittenpitted bittter pie pit pitted pitteds ted ten wolf zit zitis zymosan zymosans';

    describe('Tie DS Testing', function() {

        beforeEach(function() {});

        it('Trie is initalized', function() {
            expect(typeof trie).to.equal('object');
            expect(typeof trie._add).to.equal('function');
            expect(trie.find('bite')).to.equal(null);
        });

        it('Add words to trie', function() {
            expect(trie.addSeries(wordSeries)).to.equal(true);
            expect(trie.add('zitis')).to.equal(true);
            expect(trie.find('aardwolf')).to.equal(true);
            expect(trie.find('aa')).to.equal(true);
            expect(trie.find('bittenpitted')).to.equal(true);
        });

        it('Add words to trie with file', function() {
            trie.build(filePath);
            expect(trie.find('aah')).to.equal(true);
        });
    });

})();
