import { arrays } from "./data";
import { InsertionSort } from "../../sort/insertion";

const algorithm = new InsertionSort();

arrays.forEach(array => {
    const result = algorithm.sort(array);
    console.log(result);
});

process.exit();