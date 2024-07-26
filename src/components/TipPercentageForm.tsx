import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

interface TipPercentageFormProps {
  dispatch: Dispatch<OrderActions>;
  tip: number;
}

const TipPercentageForm = ({ dispatch, tip }: TipPercentageFormProps) => {
  const handleTip = (tip: number) => {
    dispatch({ type: "add-tip", payload: { value: tip } });
  };

  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>

      <form action="">
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              type="radio"
              id={tipOption.id}
              name="tip"
              value={tipOption.value}
              onChange={(e) => handleTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPercentageForm;
