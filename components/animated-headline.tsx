'use client'

type AnimatedHeadlineProps = {
  text: string
  className?: string
}

// Stamps the headline in letter-by-letter on load. Spaces are preserved.
export function AnimatedHeadline({ text, className }: AnimatedHeadlineProps) {
  const words = text.split(' ')
  let letterIndex = 0

  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          {word.split('').map((char) => {
            const delay = letterIndex * 0.045
            letterIndex += 1
            return (
              <span
                key={`${char}-${letterIndex}`}
                className="stamp-letter"
                style={{ animationDelay: `${delay}s` }}
                aria-hidden="true"
              >
                {char}
              </span>
            )
          })}
          {wordIdx < words.length - 1 ? (
            <span aria-hidden="true">&nbsp;</span>
          ) : null}
        </span>
      ))}
    </h1>
  )
}
