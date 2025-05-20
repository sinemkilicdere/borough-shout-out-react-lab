// BoroughCard.jsx

function BoroughCard({ borough = "Queens", bgColor }) {
  const emojiMap = {
    Manhattan: "🏙️",
    Brooklyn: "🌉",
    Queens: "🌆",
    Bronx: "🦅",
    "Staten Island": "🚢"
  };

  const style = {
    backgroundColor: bgColor || "#EEE",
    padding: "1rem",
    margin: "1rem 0",
    borderRadius: "10px",
    fontSize: "1.5rem",
    textAlign: "center"
  };

  return (
    <div style={style}>
      Hello from {borough}! {emojiMap[borough] || ""}
    </div>
  );
}

export default BoroughCard;
