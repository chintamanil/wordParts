var Trie = require('./trie.js');
var Validate = require('./../methods/validate.js');

// TODO use try catch here

/**
 * Function provides a Facade to the Validate method for spell checking.
 *  First it checks it input string is in dictionary if not then it asks the Validate method to check
 *  if it can do spelling correction
 *
 * @return {[type]}        [description]
 */
module.exports = (function() {
    var _dictonaries, _private;
    _dictonaries = {};

    // by defaul its creating a dictionary for 'trie' based on input file.
    _dictonaries.trie = new Trie();

    // private methods
    _private = {
        find: function(word, dictType) {
            dictType = dictType || 'trie';
            if (_dictonaries[dictType].find(word)) {
                return word;
            } // add else loop TODO ?
        },

        build: function(dictFile, dictType) {
            dictType = dictType || 'trie';
            // check if dictionary was already built. If so return that one. or add to that TODO
            _dictonaries[dictType].build(dictFile);
        },

        add: function(word, dictType) {
            // TODO check typeof word and dictType
            dictType = dictType || 'trie';
            _dictonaries[dictType].add(word);
        }

    };

    return {
        build: _private.build,
        find: _private.find,
        add: _private.add
    };

})();
