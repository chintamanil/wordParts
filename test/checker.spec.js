(function() {

    var chai = require('chai');
    var expect = chai.expect;
    var Checker = require('./../src/module/checker.js');
    var filePath = './src/dict/sample_words.txt';
    var filePath2 = './src/dict/words_for_problem.txt';
    var wordSeries = 'aa ab as er ers ass at abaser abasers he is tic atheistic aardwolf aa assist assatepit ate bit bitten bittenpit bittenpitted ter bitter pie pit pitted pitteds ted ten wolf zit zitis zymosan zymosans';

    describe('Checker Testing', function() {
        this.timeout(5000);

        beforeEach(function() {});

        it('Checker is initalized', function() {
            expect(Checker.find('bite')).to.equal(null);
        });

        it.skip('Add words to Checker', function() {
            expect(Checker.add('apple')).to.equal(true);
            expect(Checker.add('applepie')).to.equal(true);
            expect(Checker.find('apple')).to.equal(true);
            expect(Checker.find('applepie')).to.equal(true);
        });

        it('Add Series to Checker', function() {
            expect(Checker.addSeries(wordSeries.split(' ').sort().join(' '))).to.equal(true);
            // expect(Checker.find('bitten')).to.equal(true);
            expect(Checker.find('tic')).to.equal(true);
        });

        it.skip('Add words to Checker with file', function() {
            Checker.build(filePath2);
            expect(Checker.find('ably')).to.equal(true);
        });

        it('Validates trie', function(done) {
            this.timeout(15000);
            setTimeout(done, 15000);
            var res = Checker.traverse();
            // expect(res.firstLongest.word).to.equal('bittenpitted');
            // expect(res.count).to.equal(8);
        });

    });

})();
