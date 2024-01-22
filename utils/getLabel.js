export default function (label) {
  let beautified = label.replace(/_/g, " ");
  return beautified.charAt(0).toUpperCase() + beautified.slice(1);
}
