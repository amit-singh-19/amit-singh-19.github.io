// collection name - marks
db.marks.insertOne({
  name: "John",
  term: "t1",
  subject: "Maths",
  marks: 95,
});

db.marks.insertMany([
  { name: "John", term: "t2", subject: "maths", marks: 85 },
  { name: "John", term: "t3", subject: "science", marks: 70 },
  { name: "John", term: "t1", subject: "science", marks: 50 },
  { name: "John", term: "t2", subject: "science", marks: 60 },
  { name: "John", term: "t3", subject: "science", marks: 90 },
  { name: "Cathy", term: "t1", subject: "maths", marks: 91 },
  { name: "Cathy", term: "t2", subject: "maths", marks: 81 },
  { name: "Cathy", term: "t3", subject: "maths", marks: 71 },
  { name: "Cathy", term: "t1", subject: "science", marks: 51 },
  { name: "Cathy", term: "t2", subject: "science", marks: 61 },
  { name: "Cathy", term: "t3", subject: "science", marks: 91 },
]);

db.marks.find({}, { _id: 0, name: 1, term: 1, subject: 1, marks: 1 });
db.marks
  .find({}, { _id: 0, name: 1, term: 1, subject: 1, marks: 1 })
  .sort({ name: 1 });
db.marks
  .find({}, { _id: 0, name: 1, term: 1, subject: 1, marks: 1 })
  .sort({ name: 1, term: 1 });
db.marks
  .find({}, { _id: 0, name: 1, term: 1, subject: 1, marks: 1 })
  .sort({ term: 1 });

db.marks.aggregate([
  {
    $group: {
      _id: "$name",
      total: { $sum: "$marks" },
    },
  },
]);

db.marks.aggregate([
  {
    $group: {
      _id: "$subject",
      total: { $sum: "$marks" },
    },
  },
]);

db.marks.aggregate([
  {
    $group: {
      _id: "$term",
      total: { $sum: "$marks" },
    },
  },
]);

db.marks
  .aggregate([
    {
      $group: {
        _id: { name: "$name", subject: "$subject" },
        total: { $sum: "$marks" },
      },
    },
  ])
  .sort({ _id: 1 });

db.marks
  .aggregate([
    {
      $group: {
        _id: { name: "$name", term: "$term" },
        total: { $sum: "$marks" },
      },
    },
  ])
  .sort({ _id: 1 });

// ----------------------------------------------------------------------
db.employees.aggregate([
  { $project: { _id: 0, name: 1, dept: "departement" } },
]);

db.employees.aggregate([{ $project: { _id: 0, name: 1, salary: 1 } }]);

db.employees.updateOne({ name: "John Smith" }, { $set: { salary: 3400 } });

db.employees.updateMany({ departement: "IT" }, { $set: { strSalary: "2500" } });

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      departement: 1,
      Sal: { $convert: { input: "$strSalary", to: "int" } },
    },
  },
  {
    $group: {
      _id: "$departement",
      total: { $sum: "$Sal" },
    },
  },
  {
    $out: "deptWiseSalary",
  },
]);

db.createView("deptWiseSalaryView", "employees", [
  {
    $project: {
      _id: 0,
      name: 1,
      departement: 1,
      Sal: { $convert: { input: "$strSalary", to: "int" } },
    },
  },
  {
    $group: {
      _id: "$departement",
      total: { $sum: "$Sal" },
    },
  }
]);
