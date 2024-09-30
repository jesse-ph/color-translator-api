const fs = require('fs');
const fileReader = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        
        return jsonData;

    } catch (error) {
        console.error('Error reading or parsing JSON file:', error);
    }
}

module.exports = fileReader;