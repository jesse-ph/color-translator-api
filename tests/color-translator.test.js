const fileReader = require('../features/file-reader');
const colorNameToHex = require('../features/color-translator');

const jsonFilePath = './data/colors.json';
const colorList = fileReader(jsonFilePath);

test('translate "red" into #FF0000', () => {
    const colorName = 'red';
    const result = colorNameToHex(colorName, colorList);

    expect(result).toBe('#FF0000');
});

test('translate "green" into #008000', () => {
    const colorName = 'green';
    const result = colorNameToHex(colorName, colorList);

    expect(result).toBe('#008000');
});

test('translate "blue" into #0000FF', () => {
    const colorName = 'blue';
    const result = colorNameToHex(colorName, colorList);

    expect(result).toBe('#0000FF');
});