const getModifiers = (modifiers, prefix) =>
  modifiers.length > 0 && modifiers.map(modifier => `${prefix}--${modifier}`).join('');

export { getModifiers };
