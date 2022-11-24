import React, { useEffect, useState } from "react";
import "../css/assessment.css";

export const TrainIndex = () => {
  const [n, setN] = useState(0);
  const [cars, setCars] = useState([
    10, 2, 3, 4, 5, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (cars.length > 0) {
      setCount(train_sort(16, cars));
      setN(0);
    }
  }, [cars]);

  const addCar = () => {
    if (n > 0) {
      setCars((curCars) => [...curCars, n]);
    }
  };
  const removeCar = (index) => {
    var list = cars.filter((item, i) => i !== index);
    setCars(list);
  };
  return (
    <div className="layout-container">
      <div>
        <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
        <button onClick={addCar}>Add</button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h2 style={{ color: "gray" }}>Cars:</h2>
        {cars.map((car, index) => {
          return (
            <h2 key={index} onClick={() => removeCar(index)}>
              {car},
            </h2>
          );
        })}
      </div>
      <h1>Result:</h1>
      <h1 style={{ fontSize: 30 }}>{count}</h1>
    </div>
  );
};

function train_sort(num_cars, car_weights) {
  var cur_car,
    cur_train,
    first_car_weight,
    longest_as_head,
    longest_as_tail,
    max_length,
    new_length,
    trains_arr;
  trains_arr = [];
  first_car_weight = car_weights[0];
  trains_arr.push([first_car_weight, first_car_weight, 1]);
  max_length = 0;

  for (var i = 1; i < num_cars + 1; i += 1) {
    cur_car = car_weights[i];
    longest_as_head = [cur_car, cur_car, 1];
    longest_as_tail = [cur_car, cur_car, 1];

    for (var j = 0; j < trains_arr.length; j += 1) {
      cur_train = trains_arr[j];

      if (cur_car < cur_train[0]) {
        new_length = cur_train[2] + 1;

        if (new_length > longest_as_tail[2]) {
          longest_as_tail = [cur_car, cur_train[1], new_length];
        }
      } else {
        if (cur_car > cur_train[1]) {
          new_length = cur_train[2] + 1;

          if (new_length > longest_as_head[2]) {
            longest_as_head = [cur_train[0], cur_car, new_length];
          }
        }
      }
    }

    if (Math.max(longest_as_head[2], longest_as_tail[2]) > max_length) {
      max_length = Math.max(longest_as_head[2], longest_as_tail[2]);
    }

    trains_arr.push(longest_as_head);
    trains_arr.push(longest_as_tail);
  }
  return max_length;
}
