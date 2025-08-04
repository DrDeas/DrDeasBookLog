const fs = require('fs');

// Adjust these values as needed
const inputPath = './data.js';
const outputPath = './data.updated.js';
const imageBaseUrl = 'https://raw.githubusercontent.com/DrDeas/DrDeasBookLog/refs/heads/main/images/';

function zeroPad(num, length) {
  return num.toString().padStart(length, '0');
}

function updateCoverUrls(data) {
  return data.map(book => {
    const paddedNum = zeroPad(book.number, 5); // e.g., 1 → 00001
    book.customCoverUrl = `${imageBaseUrl}Book_${paddedNum}.jpg`;
    return book;
  });
}

// Read the original file
fs.readFile(inputPath, 'utf8', (err, fileContent) => {
  if (err) return console.error('Error reading file:', err);

  // Extract the books array
  const booksArrayMatch = fileContent.match(/const books\s*=\s*(\[\s*[\s\S]*?\s*\]);/);

  if (!booksArrayMatch) {
    console.error('Could not find books array in the input file.');
    return;
  }

  const booksJson = booksArrayMatch[1];

  try {
    const books = eval(booksJson); // Use `eval` since it's JavaScript (not pure JSON)
    const updatedBooks = updateCoverUrls(books);

    // Replace the old array in the original file content
    const updatedFileContent = fileContent.replace(
      /const books\s*=\s*\[\s*[\s\S]*?\s*\];/,
      `const books = ${JSON.stringify(updatedBooks, null, 2)};`
    );

    fs.writeFile(outputPath, updatedFileContent, 'utf8', err => {
      if (err) return console.error('Error writing file:', err);
      console.log(`✅ Successfully wrote updated data to ${outputPath}`);
    });
  } catch (parseErr) {
    console.error('Error parsing books array:', parseErr);
  }
});
