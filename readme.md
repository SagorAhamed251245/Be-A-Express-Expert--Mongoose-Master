---

/\* mongodb oparetor

#### https://www.mongodb.com/docs/manual/reference/operator/query-comparison/

## Comparison Query Operators

<div align="center">

| Name |                             Description                             |
| :--- | :-----------------------------------------------------------------: |
| $eq  |         Matches values that are equal to a specified value.         |
| $gt  |       Matches values that are greater than a specified value.       |
| $gte | Matches values that are greater than or equal to a specified value. |
| $in  |          Matches any of the values specified in an array.           |
| $lt  |        Matches values that are less than a specified value.         |
| $lte |  Matches values that are less than or equal to a specified value.   |
| $ne  |        Matches values that are less than a specified value.         |
| $nin |          Matches none of the values specified in an array.          |
|      |                                                                     |

</div>
#### expemle

| Name |                    Syntax                     |         Example         |           Output            |
| :--- | :-------------------------------------------: | :---------------------: | :-------------------------: |
| $eq  |        { field: { $eq: value } } equal        | find({ age:{$eq: 18 }}) |        { "age" : 18}        |
| $gt  |   { field: { $eq: value } }geterthen equal    |            s            |
| $gte | { field: { $eq: value } } geterthen and equal |            s            |
| $in  |                       s                       |            s            |
| $lt  |                       s                       |            s            |
| $lte |                       s                       |            s            |
| $ne  |      { field: { $ne: value } } not equal      | find({ age:{$ne: 18 }}) | { "age" : 19}, {"age" : 20} |
| $nin |                       s                       |            s            |
