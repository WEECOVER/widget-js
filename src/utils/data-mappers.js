const getModifiers = (modifiers, prefix, styles) => {
  if (modifiers.length > 0) {
    const allModifiersClassNames = modifiers
      .map(modifier => styles[`${prefix}--${modifier}`])
      .join(' ');
    return `${styles[prefix]} ${allModifiersClassNames}`;
  }
  return null;
};
export { getModifiers };
