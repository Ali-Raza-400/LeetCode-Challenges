var mostCommonWord = function(paragraph, banned) {
    const cleanParagraph = paragraph.toLowerCase().replace(/[^a-z\s]/g, " ");
    const words = cleanParagraph.split(/\s+/); 
    const hashMap = {};
    for (let word of words) {
        if (word && !banned.includes(word)) { 
            hashMap[word] = (hashMap[word] || 0) + 1;
        }
    }
    let max = 0;
    let maxWord = "";
    for (let word in hashMap) {
        if (hashMap[word] > max) {
            max = hashMap[word];
            maxWord = word;
        }
    }
    return maxWord;
};