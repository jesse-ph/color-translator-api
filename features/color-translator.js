const colorNameToHex = (name, colorList) => {
    const colorName = name.toLowerCase();
    const hex = colorList[colorName] || '';

    return hex;
}

module.exports = colorNameToHex;