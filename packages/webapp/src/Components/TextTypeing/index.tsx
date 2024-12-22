import React, { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";

const TextTyping = ({
  texts = [""],
  typingSpeed = 100,
  backspaceSpeed = 50, // New prop for backspacing speed
  pauseTime = 1500,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    // Determine the speed based on the typing or backspacing mode
    const speed = isDeleting ? backspaceSpeed : typingSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        // Typing effect
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Backspacing effect
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        // Pause before backspacing
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        // Move to the next text
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length); // Loop through texts
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    backspaceSpeed,
    pauseTime,
  ]);

  return (
    <Text {...props}>
      {displayedText}
      <Box
        as="span"
        ml="1"
        animation="blink 0.5s steps(1, start) infinite"
        sx={{
          "@keyframes blink": {
            "0%": { opacity: 1 },
            "50%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        }}
      >
        |
      </Box>
    </Text>
  );
};

export default TextTyping;
