import React from "react";
import {Chart, CategoryScale, LinearScale, BarElement} from 'chart.js'
import { Bar } from "react-chartjs-2";
Chart.register(BarElement)
Chart.register(CategoryScale)
Chart.register(LinearScale)


const BarChart = (props) => {
  const booksdata = props.data;
  // new Set to remove duplicate categories
  const authors = [...new Set(booksdata.map((book) => book.author))];
  console.log(authors);

  // create empty array
  const numberOfSolds = []; // numberOfSolds By authors
  for (let i = 0; i < authors.length; i++) {
    numberOfSolds[i] = 0;
  }

  booksdata.forEach((book) => {
    for (let i = 0; i < authors.length; i++) {
      if (book.author == authors[i]) {
        numberOfSolds[i] += book.numberOfSolds;
      }
    }
  });

  console.log(numberOfSolds);
  return (
    <div>
      <Bar
        data={{
          labels: authors,
          datasets: [
            {
              label: "number of sold",
              data: numberOfSolds,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={1}
        options={{ maintainAspectRatio: false }}
      ></Bar>
    </div>
  );
};

export default BarChart;
