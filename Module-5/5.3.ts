/* mongodb oparetor
https://www.mongodb.com/docs/manual/reference/operator/query-comparison/

Comparison Query Operators
Comparison operators return data based on value comparisons.

NOTE
For details on a specific operator, including syntax and examples, click on the link to the operator's reference page.

For comparison of different BSON type values, see the specified BSON comparison order.

Name
Description
$eq
Matches values that are equal to a specified value.
$gt
Matches values that are greater than a specified value.
$gte
Matches values that are greater than or equal to a specified value.
$in
Matches any of the values specified in an array.
$lt
Matches values that are less than a specified value.
$lte = Matches values that are less than or equal to a specified value.
$ne = Matches all values that are not equal to a specified value.
$nin = Matches none of the values specified in an array.
 */
let db = { practice };
db.practice.aggregate([
  // stage 1
  { $match: { gender: "Male", age: { $lt: 30 } } },
  // stage 2
  { $project: { name: 1, age: 1, gender: 1 } },
]);

db.practice.aggregate([
  // stage 1
  { $match: { gender: "Male" } },
  // stage 2
  { $match: { age: { $lt: 30 } } },
  // stage 3
  { $project: { name: 1, age: 1, gender: 1 } },
]);

db.practice.aggregate([
  { $match: { gender: "Male" } },

  // { $match: { age: { $lt: 30 } } },
  { $addFields: { course: "Level2", eduTec: "programing hero" } }, // add to new fild

  { $project: { name: 1, age: 1, gender: 1, course: 1, eduTec: 1 } },
  { $out: "student-collection" }, // to creat new collection and put thosde data to this collectiond
]);

db.practice.aggregate([
  { $match: { gender: "Male" } },

  // { $match: { age: { $lt: 30 } } },
  { $addFields: { course: "Level2", eduTec: "programing hero" } }, // add to new fild

  { $project: { name: 1, age: 1, gender: 1, course: 1, eduTec: 1 } },
  { $merge: "practice" }, // to mearge with old  collection and put thosde data to this collectiond
]);

db.practice.aggregate([
  {
    $group: {
      _id: "$gender",
      count: { $sum: 1 },
      amakeDekhaw: { $push: "$name" },
    },
  },
]);

db.practice.aggregate([
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" },
      maxSalary: { $max: "$salary" },
      minSalary: { $min: "$salary" },
      avarageSalary: { $avg: "$salary" },
    },
  },
]);

db.practice.aggregate([
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" },
      maxSalary: { $max: "$salary" },
      minSalary: { $min: "$salary" },
      avgSalary: { $avg: "$salary" },
    },
  },
  {
    $project: {
      totalSalary: 1,
      maxSalary: 1,
      minSalary: 1,
      avarageSalary: "$avgSalary",
    },
  },
]);

db.practice.aggregate([
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" },
      maxSalary: { $max: "$salary" },
      minSalary: { $min: "$salary" },
      avgSalary: { $avg: "$salary" },
    },
  },
  {
    $project: {
      totalSalary: 1,
      maxSalary: 1,
      minSalary: 1,
      avarageSalary: "$avgSalary",
      rengeMaxTOMin: { $subtract: ["$maxSalary", "$minSalary"] },
    },
  },
]);

db.practice.aggregate([
  {
    $unwind: "$friends",
  },

  {
    $group: {
      _id: "$friends",
      conunt: { $sum: 1 },
    },
  },
]);

db.practice.aggregate([
  {
    $unwind: "$interests",
  },

  {
    $group: {
      _id: "$age",
      interestsByAge: {
        $push: "$interests",
      },
    },
  },
]);
