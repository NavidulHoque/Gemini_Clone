export default function optimizeResponse(response, setShowGeminiResults, setIsDisabled) {
    const arrayOfLines = response.split("\n")
    const regexForDoubleStars = /\B\*\*([^*]+)\*\*\B/g;
    const regexForHash = /##\s?([a-zA-Z0-9\s.,-]+)/g

    for (let i = 0; i < arrayOfLines.length; i++) {
        const line = arrayOfLines[i]

        if (line === "") {
            continue
        }

        else if (line.includes("##")) {
            arrayOfLines[i] = line.replace(regexForHash, (match, p1) => `<b>${p1}</b>`)
        }

        else if (line.includes("**")) {
            let optimizedLine = line.replace(regexForDoubleStars, (match, p1) => `<b>${p1}</b>`)

            if (optimizedLine.includes("*")) {
                optimizedLine = optimizedLine.replaceAll("*", "")
            }
            arrayOfLines[i] = optimizedLine
        }

        else if (line.includes("*")) {
            arrayOfLines[i] = line.replaceAll("*", "")
        }

    }

    response = arrayOfLines.join("<br />")
    const arrayOfWords = response.split(" ")
    generateResponseLikeParagraph(arrayOfWords, setShowGeminiResults, setIsDisabled)
}

function generateResponseLikeParagraph(arrayOfWords, setShowGeminiResults, setIsDisabled) {
    for (let i = 0; i < arrayOfWords.length; i++) {
        const word = arrayOfWords[i]
        setTimeout(() => {
            setShowGeminiResults(prev => prev + `${word} `)
            if (i + 1 === arrayOfWords.length) {
                setIsDisabled(false)
            }
        }, i * 50)
    }
}

