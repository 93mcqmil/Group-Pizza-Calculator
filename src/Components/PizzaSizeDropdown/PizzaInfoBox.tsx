import "../sass/_h2.scss";
import "../sass/_paragraph.scss";
import "../sass/_paragraph.scss";
import "../sass/_InfoBox.scss";

import Calculator from "../Calculator/Calculator";

import "../Data/pizzaSizes.json";
import "../sass/_buttons.scss";


const PizzaInfoBox = ({ name, price,size }: PizzaType) => {
  return (
    <>
      <div className='info-box'>
        <h2>Du har valt: </h2>
        {/* får inte glömma och skapa en scss fil för h3*/}
        <u>{name} {size} </u> <br />
        <div>
          Pris: {price}
          <br />
        </div>
        {/* <div><button>Add</button><ul>{ingredients}</ul></div> */}
      </div>
    </>
  );
};
export default PizzaInfoBox;
