export default function BoilingVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return <p>The water would boiled!</p>;
  }

  return (
    <div>
      <p>Water would not boiled</p>
    </div>
  );
}
