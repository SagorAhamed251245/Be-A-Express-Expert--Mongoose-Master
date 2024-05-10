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

| Name |                     Syntax                     |             Example              |            Output            |
| :--- | :--------------------------------------------: | :------------------------------: | :--------------------------: |
| $eq  |        { field: { $eq: value } } equal         |     find({ age:{$eq: 18 }})      |        { "age" : 18}         |
| $gt  |    { field: { $gt: value } }geterthen equal    |     find({ age:{$gt: 30 }})      | { "age" : 31}, { "age" : 32} |
| $gte | { field: { $gte: value } } geterthen and equal |     find({ age:{$gte: 30 }})     | { "age" : 30}, { "age" : 31} |
| $in  | { field: { $in: [<value1>, ... <valueN> ] } }  |  find({ age:{$in: [18,..,30]}})  | { "age" : 18}, { "age" : 14} |
| $lt  |      { field: { $lt: value } } less then       |     find({ age:{$lt: 30 }})      | { "age" : 28}, { "age" : 29} |
| $lte | { field: { $lte: value } } less then and equal |     find({ age:{$lte: 30 }})     | { "age" : 29}, { "age" : 30} |
| $ne  |      { field: { $ne: value } } not equal       |     find({ age:{$ne: 18 }})      | { "age" : 19}, {"age" : 20}  |
| $nin | { field: { $nin: [<value1>, ... <valueN> ] } } | find({ age:{$nin: [18,..,30]}}}) | { "age" : 11}, {"age" : 50}  |

|    implicit and     |                       Example                        |               Output               |
| :-----------------: | :--------------------------------------------------: | :--------------------------------: |
| geterthen less then |         find({ age: { $lt: 30 , $gt: 18} })          |    { "age" : 19}, {"age" : 29}     |
| with another field  | find({gender: "Female" ,age: { $lt: 30 , $gt: 18} }) | { "gender" : "Female","age" : 18 } |
|                     |
