(function() {

    var chai = require('chai');
    var expect = chai.expect;
    var Checker = require('./../src/module/checker.js');
    var filePath = './../src/dict/sample_words.txt';

    describe('Spell Checker Testing', function() {

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

         it('Add Series to Checker', function() {
            expect(Checker.addSeries('ass assist assate bit bitten  bittenpitted bittenpitteds bittter pie pit pitteds ted ten')).to.equal(true);
            expect(Checker.find('bitten')).to.equal(true);
            expect(Checker.find('assate')).to.equal(true);
        });



        it.skip('Add words to Checker with file', function() {
            Checker.build(filePath);
            expect(Checker.find('ably')).to.equal(true);
        });

        it('Validates trie', function() {
            Checker.traverse();
             expect(Checker.find('assi')).to.equal(false);
            // expect(Checker.find('ably')).to.equal(true);
        });

    });



})();
