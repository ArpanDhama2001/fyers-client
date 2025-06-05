const getVolume = (data) => {
  if (!data || !data) {
    return { call: 0, put: 0 };
  }
  const optionsChain = data.optionsChain;
  const volume = optionsChain.reduce(
    (acc, option) => {
      if (option.option_type === "CE") {
        acc.call += option.volume;
      } else if (option.option_type === "PE") {
        acc.put += option.volume;
      }
      return acc;
    },
    { call: 0, put: 0 }
  );
  return volume;
};

export default getVolume;
