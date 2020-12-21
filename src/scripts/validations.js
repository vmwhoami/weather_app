const inputValidtion = (input) => {
  const { value } = input;
  const num = value.split('').find(ch => Number(ch));
  const msg = "Input can't be empty or a number";
  if (!value || num) {
    return msg;
  }

  return false;
};

export default inputValidtion;