const getModifiers = (modifiers, prefix) => {
  if (modifiers.length > 0) {
    const allModifiersClassNames = modifiers.map(modifier => `${prefix}--${modifier}`).join('');
    return `${prefix} ${allModifiersClassNames}`;
  }
  return null;
};
export { getModifiers };
