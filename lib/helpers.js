export let withKeyProps = (arr) =>
  arr.map((el, i) =>
    ({ ...el, key: i.toString()})
  );