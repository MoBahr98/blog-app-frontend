export const getInitials = (title) => {
  if (!title) return "";

  const words = title.trim().split(/\s+/); // split by any whitespace
  return words
    .slice(0, 2) // take first two words
    .map(word => word[0].toUpperCase())
    .join("");
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getToastMessagesByType = (type) => {
  switch (type) {
    case "edit":
      return "Blog post updated successfully!";
    case "draft":
      return "Blog post saved as draft successfully!";
    case "published":
      return "Blog post published successfully!";

    default:
      return "Blog post published successfully!";
  }
};

export const sanitizeMarkdown = (content) => {
  const markdownBlockRegex = /^```(?:markdown)?\n([\s\S]*?)\n```$/;
  const match = content.match(markdownBlockRegex);
  return match ? match[1] : content;
}