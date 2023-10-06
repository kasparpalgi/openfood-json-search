import fs from 'fs/promises';

/**
 * Write product data to a JSON file.
 * @param {Object} productData - The product data to write.
 * @param {string} fileName - The name of the output file.
 */
export async function writeProductToFile(productData, fileName) {
  try {
    await fs.writeFile(fileName, JSON.stringify(productData, null, 2));
  } catch (err) {
    console.error(`Failed to write file: ${err}`);
  }
}
