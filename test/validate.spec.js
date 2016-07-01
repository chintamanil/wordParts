(function() {

    var chai = require('chai');
    var expect = chai.expect;
    var Validate = require('./../src/methods/validate.js');

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

        it('Add words to Checker with file', function() {
            Checker.build(filePath);
            expect(Checker.find('ably')).to.equal(true);
        });
    });



})();
