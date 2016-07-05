var Trie = require('./trie.js');
var Validate = require('./../methods/validate.js');

// TODO use try catch here

/**
 * [Facde Pattern to expose highlevel methods]
 * Exposes trie methods to high level calling function
 */
module.exports = (function() {
    var _dictonaries, _private;
    _dictonaries = {};
    var filePath = './../dict/words_for_problem.txt';

    // Can create a new Instance with new data structure
    //  e.g _dictonaries.dawg = new DAWG()
    _dictonaries.trie = new Trie();

    // private methods
    _private = {
        find: function(word, dictType) {
            dictType = dictType || 'trie';
            return _dictonaries[dictType].find(word);
        },

        build: function(dictFile, dictType) {
            dictType = dictType || 'trie';
            dictFile = dictFile || filePath;
            _dictonaries[dictType].build(dictFile);
        },

        add: function(word, dictType) {
            dictType = dictType || 'trie';
            return _dictonaries[dictType].add(word);
        },

        addSeries: function(str, dictType) {
            dictType = dictType || 'trie';
            return _dictonaries[dictType].addSeries(str);
        },

        traverse: function(dictType) {
            dictType = dictType || 'trie';
            return Validate.traverse(_dictonaries[dictType]);
        }
    };

    return {
        build: _private.build,
        find: _private.find,
        add: _private.add,
        addSeries: _private.addSeries,
        traverse: _private.traverse
    };

})();
