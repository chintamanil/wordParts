module.exports = (function() {

    var _private = {
        /**
         * Recursive function to find smaller words in bigger words
         *
         * @param  {[type]} word         [word to find smaller words]
         * @param  {[type]} trieInstance [trie instance to traverse through]
         *
         * @return {[type]}              [count of smaller words]
         */
        findTwoWords: function(word, trieInstance) {
            var wordLen = word.length;
            var str1, str2, i;
            var count = 0;

            // recursive function is necessary to decode words like at-he-ist
            function recurse(str) {
                if (str.length <= 2) {
                    if (trieInstance.find(str)) {
                        return count;
                    } else {
                        return false;
                    }
                } else {
                    for (i = 2; i < wordLen; i++) {
                        str1 = str.slice(0, i);
                        str2 = str.slice(i);
                        if (trieInstance.find(str1)) {
                            count++;
                            if (str2.length) {
                                return recurse(str2);
                            } else {
                                return count;
                            }
                        }
                    }
                    return false;
                }
            }
            return recurse(word);
        },

        /**
         * function to run through different scenarios for finding smaller word in larger word
         *
         * @param  {[type]} word         [word to find]
         * @param  {[type]} previous     [previous word (before 'word')]
         * @param  {[type]} trieInstance [trie instance]
         * @param  {[type]} depth        [depth indicates number of  sub words found in tree]
         *
         * @return {[type]}              [count of sub words]
         */
        findWord: function findWord(word, previous, trieInstance, depth) {
            // TODO: Missing cases words like atheist are found but atheistic are not found yet.
            // atheistic should be looped in recursive function as at + heistic OR
            // recurse(heistic) = he + is + tic.
            var twoWords;
            var cache = {};
            var prevPlusWord = previous.concat(word);

            /**
             * Algo: First look into cache
             *  find word in trie for depth > 0
             *  else find previous + word in recursive function that gives sub words.
             *   else find previous + word in trie
             */
            if (cache[prevPlusWord]) {
                return cache[prevPlusWord];
            }

            if (depth > 0 && trieInstance.find(word)) {
                return 1;
            }

            // if found in recursive store in cache & return count
            twoWords = _private.findTwoWords(prevPlusWord, trieInstance);
            if (twoWords) {
                cache[prevPlusWord] = twoWords;
                return twoWords;
            }

            // TODO: Do I need this
            if (depth > 0 && trieInstance.find(prevPlusWord)) {
                return 1;
            }

            return -1;
        },

        /**
         * function to traverse through trie instance to find all words that has sub words
         *
         * @param  {[type]} trieInstance [trie instance]
         *
         * @return {[type]}              [first longest , secondLongest & total Count of words that have sub words]
         */
        traverse: function(trieInstance) {
            var firstLongest = {
                word: '',
                len: 0
            };
            var secondLongest = {
                word: '',
                len: 0
            };
            var depth = 0;
            //  wholeWord = entire word from base of trie
            //  currentWord = word from where '$' was last found
            //  if  '$' is found in trie indicates end of current word so previousWord = currentWord
            //  wordParts = sub parts of a word e.g: ['at', 'heist'] = atheist
            var wholeWord = [];
            var currentWord = [];
            var previousWord = [];
            var wordParts = [];

            var count = 0;
            var counted = {};

            traversal(trieInstance.toObject());
            // console.log(counted);
            console.log(firstLongest, secondLongest);
            console.log(count);
            return {
                count: count,
                counted: counted,
                firstLongest: firstLongest,
                secondLongest: secondLongest
            };


            function traversal(current, parts, basePart) {
                var currentKeys = Object.keys(current);
                var len = currentKeys.length;
                var i, letter, incremented = false,
                incrDepth = false;
                var incrCount = 0;
                var numOfParts = parts || 1;
                var base = basePart || [];

                /**
                 * For each key in trie instance lop over it.
                 * if key === '$' its end of word . Increment depth & previousWord = current Word
                 * else traverse through trie for each key to find word or sub word till you get '$'
                 */
                for (i = 0; i < len; i++) {
                    letter = currentKeys[i];
                    if (letter === '$' && current[letter] === true) {
                        incrDepth = true;
                        if (depth === 0) {
                            wordParts.push(wholeWord.join(''));
                        }
                        previousWord = wholeWord.slice(wordParts.join('').length, wholeWord.length - currentWord.length);
                        if (depth > 0 && !previousWord.length) {
                        // previousWord = wordParts[wordParts.length - 1].split('')
                        }

                        incrCount = _private.findWord(currentWord.join(''), previousWord.join(''), trieInstance, depth);
                        // console.log(wholeWord.join(''), previousWord.join(''), currentWord.join(''), numOfParts, incrCount, depth, wordParts);

                        /**
                         * incrCount >=0 indicates that word was found in trie. So add it to counted
                         * counted is Object that stores all the found words with their length.
                         * Store first & second longest.
                         */
                        if (incrCount >= 0) {
                            wordParts.push(previousWord.concat(currentWord).join(''));
                            incremented = true;
                            numOfParts += incrCount;
                            counted[count++] = {
                                word: wholeWord.join(''),
                                len: numOfParts
                            };
                            if (numOfParts >= firstLongest.len) {
                                secondLongest = firstLongest;
                                firstLongest = {
                                    word: wholeWord.join(''),
                                    len: numOfParts
                                };
                            } else if (numOfParts >= secondLongest.len) {
                                secondLongest = {
                                    word: wholeWord.join(''),
                                    len: numOfParts
                                };
                            }
                        }
                        depth++;
                        // previousWord = incremented ? previousWord : previousWord.concat(currentWord);
                        currentWord = [];
                        base = [];
                    } else {
                        wholeWord.push(letter);
                        currentWord.push(letter);
                        traversal(current[letter], numOfParts, base);
                    }
                }
                depth = incrDepth ? depth - 1 : depth;
                if (incremented) {
                    wordParts.pop();
                }
                if (depth === 0) {
                    wordParts.pop();
                }
                previousWord.pop();
                wholeWord.pop();
            }
        }
    };

    // return object
    return {
        traverse: _private.traverse
    };

})();
