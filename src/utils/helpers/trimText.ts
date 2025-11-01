function trimTextLength(text: string): string {
  const refLength = 320;

  if (text.length <= refLength) return text;

  return text.slice(0, refLength).trimEnd() + "...";
}

export default trimTextLength;
