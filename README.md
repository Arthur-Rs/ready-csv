# ready-csv

---

## 1 - Installation

With *yarn*:

``` bash
yarn add ready-csv 
``` 

With *npm*:


``` bash
npm install ready-csv 
``` 

---

##  2 - How to use?

Using with external cvs file:

``` js
const data = await readCSVFile(pathFile, {
    encoding: 'utf8',
    parse: 'object'
})
``` 
**encondig** - CSV file encoding.

**parse** - How you want the data to be interpreted. There are three possible options: **columns**, **rows** and **object**.

---

### See the example below:

CSV file:

``` csv
"Month", "Average", "2020", "2019"
"May"  ,  0.1     ,  0    ,  0
"Jun"  ,  0.5     ,  2    ,  1
"Jul"  ,  0.7     ,  5    ,  1
"Aug"  ,  2.3     ,  6    ,  3 
"Sep"  ,  3.5     ,  6    ,  4
"Oct"  ,  2.0     ,  8    ,  0
"Nov"  ,  0.5     ,  3    ,  0 
"Dec"  ,  0.0     ,  1    ,  0 
``` 

Returns:

- **Column** option:

``` js
[
  [ 'Month', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
  [ 'Average', 0.1, 0.5, 0.7, 2.3, 3.5, 2, 0.5, 0 ],
  [ '2020', 0, 2, 5, 6, 6, 8, 3, 1 ],
  [ '2019', 0, 1, 1, 3, 4, 0, 0, 0 ]
]
```
- **Row** option:

``` js 
[
  [ 'Month', 'Average', '2020', '2019' ],
  [ 'May', 0.1, 0, 0 ],
  [ 'Jun', 0.5, 2, 1 ],
  [ 'Jul', 0.7, 5, 1 ],
  [ 'Aug', 2.3, 6, 3 ],
  [ 'Sep', 3.5, 6, 4 ],
  [ 'Oct', 2, 8, 0 ],
  [ 'Nov', 0.5, 3, 0 ],
  [ 'Dec', 0, 1, 0 ]
]
```

- **Object** option:

``` js
  {
    "2019": [ 0, 1, 1, 3, 4, 0, 0, 0 ],
    "2020": [ 0, 2, 5, 6, 6, 8, 3, 1 ],
    Month: [ 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
    Average: [ 0.1, 0.5, 0.7, 2.3, 3.5, 2, 0.5, 0 ],
  }
```


---

Create by: **Arthur Reis**

