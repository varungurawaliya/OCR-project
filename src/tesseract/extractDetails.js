import { createWorker } from "tesseract.js"
import { cardConfig, detailsConfig } from "./config.js"

async function extractDetails(imagePath) {
  try {
    const worker = await createWorker("eng")

    // Perform OCR on the preprocessed image
    const {
      data: { text },
    } = await worker.recognize(imagePath)

    await worker.terminate()

    return verifyDetails(text)
  } catch (error) {
    throw error
  }
}

// Function to extract card details using the provided regex
function verifyDetails(ocrText) {
  //
  let matches
  let cardType = null
  let details = {}

  for (let card in cardConfig) {
    //
    matches = ocrText.match(cardConfig[card])

    if (matches) {
      cardType = card
      break
    }
  }

  if (cardType) {
    for (const detail in detailsConfig[cardType]) {
      //
      matches = ocrText.match(detailsConfig[cardType][detail])

      if (matches) {
        details[`${detail}`] = matches[0]
      } else {
        details[`${detail}`] = `${detail} not found`
      }
    }
  }
  return {
    cardType,
    details,
  }
}

export { extractDetails }
