import React from "react";
import {Chart, ArcElement} from 'chart.js'
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement)
// console.log(numberInStocks);

const PieChart = (props) => {
  const booksdata = props.data;
  // new Set to remove duplicate categories
  const categories = [...new Set(booksdata.map((book) => book.category))];
  // console.log(categories);

  // create empty array
  const numberInStocks = []; // noInStocks By categories
  for (let i = 0; i < categories.length; i++) {
    numberInStocks[i] = 0;
  }

  //foreach book if book.category = categories[x], numberInStocks[x] += book.numberInStocks
  booksdata.forEach((book) => {
    for (let i = 0; i < categories.length; i++) {
      if (book.category == categories[i]) {
        numberInStocks[i] += book.numberInStock;
      }
    }
  });
  return (
    <div>
      <Pie
        data={{
          labels: categories,
          datasets: [
            {
              label: "Dataset for Book In Stocks by Category",
              data: numberInStocks,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(54, 162, 235)",
              ],
              hoverOffset: 4,
            },
          ],
        }}
      ></Pie>
    </div>
  );
};

export default PieChart;
