
export default function inputValidtion(input) {
  let value = input.value
  if (!value) {
    return "Input can't be empty";
  }
  let num = value.split('').find(ch => parseInt(ch))
  if (num) {
    return "City or country can't contain a number";
  }
}
