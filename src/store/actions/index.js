export const embed = (novoDado) => {
  console.log(novoDado)
    return {
      type: 'EMBED',
      payload: novoDado,
    };
  };