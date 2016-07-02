(function() {

    var chai = require('chai');
    var expect = chai.expect;
    var Checker = require('./../src/module/checker.js');
    var filePath = './../src/dict/sample_words.txt';
    var filePath2 = './../src/dict/words_for_problem.txt';
    var wordSeries = 'ass at he is tic atheistic assist assatepit ate bit bitten bittenpit bittenpitted bittter pie pit pitted pitteds ted ten zit zitis zymosan zymosans';

    describe('Spell Checker Testing', function() {
        this.timeout(500);

        beforeEach(function() {});

        it('Checker is initalized', function() {
            expect(Checker.find('bite')).to.equal(null);
        });

        it('Add words to Checker', function() {
            expect(Checker.add('apple')).to.equal(true);
            expect(Checker.add('applepie')).to.equal(true);
            expect(Checker.find('apple')).to.equal(true);
            expect(Checker.find('applepie')).to.equal(true);
        });

        it.skip('Add Series to Checker', function() {
            expect(Checker.addSeries(wordSeries)).to.equal(true);
            // expect(Checker.find('bitten')).to.equal(true);
            expect(Checker.find('tic')).to.equal(true);
        });

        it('Add words to Checker with file', function() {
            Checker.build(filePath2);
            // expect(Checker.find('ably')).to.equal(true);
        });

        it('Validates trie', function(done) {
            this.timeout(5000);
            setTimeout(done, 5000);
            Checker.traverse();
            // expect(Checker.find('assi')).to.equal(false);
        });

    });

})();
