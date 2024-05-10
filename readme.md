---

# mongodb operators

#### https://www.mongodb.com/docs/manual/reference/operator/query-comparison/

## Comparison Query Operators

### Implicit Operators

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

#### Example of Implicit operators

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

####

|    implicit and     |                       Example                        |               Output               |
| :-----------------: | :--------------------------------------------------: | :--------------------------------: |
| geterthen less then |         find({ age: { $lt: 30 , $gt: 18} })          |    { "age" : 19}, {"age" : 29}     |
| with another field  | find({gender: "Female" ,age: { $lt: 30 , $gt: 18} }) | { "gender" : "Female","age" : 18 } |
|                     |

## Logical Query Operators

#### https://www.mongodb.com/docs/manual/reference/operator/query-logical/#logical-query-operators

#### Explicit operators

<div align="center">

| Name |                                               Description                                               |
| :--- | :-----------------------------------------------------------------------------------------------------: |
| $and | Joins query clauses with a logical AND returns all documents that match the conditions of both clauses. |
| $not | Inverts the effect of a query expression and returns documents that do not match the query expression.  |
| $nor |      Joins query clauses with a logical NOR returns all documents that fail to match both clauses.      |
| $or  | Joins query clauses with a logical OR returns all documents that match the conditions of either clause. |

</div

#### Example of Explicit operator

| Name |                       Syntax                       |                              Example                               |
| :--- | :------------------------------------------------: | :----------------------------------------------------------------: |
| $and | { $and: [ { <expression1> }, { <expression2> }...} |     ({ $and: [{ age: { $lt: 30, } }, { age: { $gte: 18 } }] }      |
| $or  | { $or: [ { <expression1> }, { <expression2> }...}  | ({ $or: [{ interests: "Cooking" }, { interests: "Travelling" }] }) |
| $not |   { field: { $not: { <operator-expression> } } }   |               ( { price: { $not: { $gt: 1.99 } } } )               |
| $nor |        { $nor: [ { <expression1> }, ... ] }        |         ( { $nor: [ { price: 1.99 }, { sale: true } ] } )          |

## Element Query Operators

#### https://www.mongodb.com/docs/manual/reference/operator/query-element/#element-query-operators

#### Element operators

<div align="center">

| Name    |                      Description                       |
| :------ | :----------------------------------------------------: |
| $exists |    Matches documents that have the specified field.    |
| $type   | Selects documents if a field is of the specified type. |

</div

#### Example of Element operator

| Name    |                           Syntax                           |          Example           |
| :------ | :--------------------------------------------------------: | :------------------------: |
| $exists |             { field: { $exists: <boolean> } }              | ({phone: {$exists: true}}) |
| $type   | { field: { $type: [ <BSON type1> , <BSON type2>, ... ] } } | ({age: {$type: "string}})  |
