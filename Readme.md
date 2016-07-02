# Word Repeat Count 

A program in JavaScript that reads a large list of English words.
TIt reads the dictionary file and figues out weather word is concatenated from other words.
e.g:
if the file contained: 
cat
cats catsdogcats
dog
dogcatsdog hippopotamuses rat
ratcatdogcat
the longest concatenated word would be 'ratcatdogcat' with 12 characters. ‘hippopotamuses’ is a longer word, however it is not comprised entirely of shorter words in the list. The 2nd longest concatenated word is ‘catsdogcats’ with 11 characters. The total number of concatenated words is 3. Note that ‘cats’ is not a concatenated word because there is no word ‘s’ in the list.

# Installation
```
>npm install
```

# Run Test
```
>npm test
```

# Run for prompt 
```
> npm start
```


## Some notes & thoughts:
m = total number of words in dictionary
n = average length of each word

Data Structure Used: Trie Data Structure:
Patterns used: Module Facade Command

###High Level Algo:
1. Read file file in O(m) and put in trie data structure. If end of word mark with $:true
2. Traverse trie if you come across $:trie thats word end (and beginnig of new word)
3. Basically its dfs.
4. traverse trie and keep building word using dfs
5. As you build is word can be formed by other words in dictionary.

More to Come

# Current Result
First Longest word: swellheadednesses
Second Longest word: softheadednesses
Total number of words: 54113

