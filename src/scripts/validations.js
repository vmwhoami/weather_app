const inputValidtion = (input) => {
  const { value } = input;
  const num = value.split('').find(ch => Number(ch));
  if (!value || num) return "Input can't be empty or a number";

  return false;
};

export default inputValidtion;