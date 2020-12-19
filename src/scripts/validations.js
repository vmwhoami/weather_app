
export default function inputValidtion(input) {
  const { value } = input;
  if (!value) {
    return "Input can't be empty";
  }
  const num = value.split('').find(ch => Number(ch));
  if (num) {
    return "City or country can't contain a number";
  }
}
