const fs = require("fs");

const countWord = async()=>{
    try{
        fs.readFile("\data.txt", 'utf8', (err,data) => {
            if(err) throw err;
            const getWords = data.split(/\s+/);
            const totalWords = getWords.length;
            console.log("total number of words in the text file: ",totalWords);
        });
    } catch (error){
        throw error;
    }
}

countWord();