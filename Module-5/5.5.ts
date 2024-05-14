{
  let db = { practice };
  db.practice.aggregate([
    {
      $bucket: {
        groupBy: "$age",
        boundaries: [20, 40, 60, 80],
        default: "80 er upor",
        output: {
          count: { $sum: 1 },
        },
      },
    },
  ]);
}
