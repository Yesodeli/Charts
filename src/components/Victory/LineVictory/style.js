// style.js
const customStyle = {
  g: {
    fill: "none",
    stroke: "#ddd", // A lighter shade of gray for the stroke color
    strokeWidth: 2,
  },
  label: {
    fill: "#333", // Darker text color for the labels
    fontSize: 14, // Slightly increased font size for better readability
    fontWeight: "bold", // Making the labels bold for emphasis
    fontFamily: "Arial, sans-serif", // Changing font family to Arial or any other sans-serif font
  },
  tooltip: {
    fill: "#F9A825", // A warm yellow color for the tooltip background
    color: "#fff", // White text color for the tooltip
    fontSize: 12, // Slightly decreased font size for the tooltip
    fontFamily: "Verdana, sans-serif", // Changing font family to Verdana or any other sans-serif font
    fontWeight: "normal", // Making the tooltip text normal (not bold)
    padding: 8, // Adding some padding to the tooltip content
    pointerLength: 8, // Making the tooltip pointer slightly longer
    cornerRadius: 6, // Rounding the corners of the tooltip
  },
};

export default customStyle;
