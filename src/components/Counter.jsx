import { useReducer} from "react";
import { GoDash, GoPlus } from "react-icons/go";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change_value_to_add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";
const RESET = "reset_value";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
          };
      case RESET:
          return {
              count: 0
          }
    default:
      return state;
  }
};

const Counter = ({ initialCount }) => {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    })
    

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
      dispatch({
          type: SET_VALUE_TO_ADD,
          payload: value
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch({
       type: ADD_VALUE_TO_COUNT,
   })
    };
    
    const handleClick = () => {
        dispatch({
            type: RESET,
        })
    }

  const increment = () => {
      dispatch({
       type: INCREMENT_COUNT,
   })
  };

  const decrement = () => {
      dispatch({
        type: DECREMENT_COUNT,
    })
  };

  return (
    <div className="flex flex-col justify-center border rounded p-10 m-auto h-auto bg-orange-300">
      <div className="flex justify-center gap-10 pb-5">
        <button
          className=" flex justify-center items-center rounded-full w-7 bg-red-300"
          onClick={decrement}
        >
          <div>
            <GoDash className="text-3xl" />
          </div>
        </button>
        <div className="font-bold text-xl">{state.count}</div>
        <button
          className=" flex justify-center items-center rounded-full w-7 bg-green-300"
          onClick={increment}
        >
          <GoPlus className="text-3xl" />
        </button>
      </div>
      <div>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <label className="font-bold text-xl">Add Your Number:</label>
          <input
            type="number"
            className="p-1 m-3 bg-gray-300 rounded "
            onChange={handleChange}
            value={state.valueToAdd || ""}
          />
          <div className="flex gap-3">
            <button className="flex justify-center items-center rounded font-bold text-white px-5 py-2 bg-blue-300">
              Add
            </button>
            <button
              className="flex justify-center items-center rounded font-bold text-white px-5 py-2 bg-red-300"
              onClick={handleClick}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Counter;
