import { Sort } from "./sort";

//https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D0%B2%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0%D0%BC%D0%B8
export class InsertionSort implements Sort {
    sort(array: number[]) {
        for(let j = 1; j < array.length; j++)
        {
            let i = j - 1, key = array[j];
            while(i >= 0 && array[i] > key)
            {
                array[i+1] = array[i]
                i--;
            }
            array[i+1] = key;
        }

        return array;
    }
}