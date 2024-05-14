{
  //
  const db = { task };
  //   1. Retrieve the count of individuals who are active (isActive: true) for each gender.
  db.task.aggregate([
    { $match: { isActive: true } },
    { $group: { _id: "$gender", count: { $sum: 1 } } },
  ]);
  //
}
