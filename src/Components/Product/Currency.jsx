import numeral from "numeral";
const Currency = ({ amount }) => {
  const formattedNo = numeral(amount).format("$0,0.00");
  return <div className="currency">{formattedNo}</div>;
};

export default Currency;
