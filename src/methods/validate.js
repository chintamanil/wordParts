var utils = require('./utils.js');

/**
 * [module runs through the methods that  changes the word based on vowels
 *  or based on consecutive letter [e.g 'ttttt']. Generates variations of those and
 *  tries to to see if its in the dictionary
 *
 * @param  {[type]} args         [object to check for case, vowel & multiple]
 * @param  {[type]} trieInstance [instance of Trie data structure]
 * @param  {[type]} word         [word to operate on]
 *
 * @return {[string]}              [if correct word is found returns it OR returns 'NO CORRECTION']
 */
module.exports = (function() {

    var _private = {
        // For Validation when vowel is changed
        traverse: function(trieInstance) {
            var firstLongest, secondLongest;
            var depth = 0;
            var base = [];
            var currentWord = [];
            var previousWord = [];
            var count = 0;
            var counted = {};
            var wholeWord = [];

            traversal(trieInstance.toObject());
            // console.log(trieInstance.toObject())
            return {
                count: count,
                counted: counted,
                firstLongest: firstLongest,
                secondLongest: secondLongest
            }

            function findWord(word, previous) {
                var wordLen = word.length;
                // console.log(previous, depth, word)
                if (trieInstance.find(word)) {
                    return 1;
                }
                if (trieInstance.find(previos.concat(word)) {
                    return 1;
                }
                return 0;
                // for (var i = 0; i < wordLen; i++) {
                //     word[i]
                // };
            }

            function traversal(current) {
                var currentKeys = Object.keys(current);
                var len = currentKeys.length;
                var i, letter, incremented = false;
                var incrCount = 0;

                for (i = 0; i < len; i++) {
                    letter = currentKeys[i];
                    if (letter === '$' && current[letter] === true) {
                        incremented = true;

                        if (depth > 0) {
                            incrCount = findWord(currentWord.join(''), previousWord.join(''));
                            console.log(incrCount)
                            if (incrCount > 0) {
                                console.log(wholeWord.join(''), currentWord.join(''), depth + incrCount, letter);
                            }
                        }
                        depth++;
                        previousWord = currentWord;
                        currentWord = [];
                    } else {
                        wholeWord.push(letter);
                        currentWord.push(letter);
                        traversal(current[letter]);
                        if (depth === 0) {
                            base.push(letter);
                        } else {


                        }
                    }


                }
                depth = incremented ? depth - 1 : depth;
                // console.log(depth )

                base = depth === 0 ? [] : base;
                wholeWord.pop();
            }
        }
    };

    return {
        traverse: _private.traverse
    };

})();
