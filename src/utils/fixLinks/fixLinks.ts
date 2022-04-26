export const fixLinks = (links: string | null) => {
  if (links) return links.replaceAll('http:', 'https:');
};

// Changes http to https to fix issue with calling non sure api from secure website
