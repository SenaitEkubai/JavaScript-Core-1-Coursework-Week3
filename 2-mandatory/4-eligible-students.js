/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/
//using nested for loop

function eligibleStudents(arr) {
  let studentsWhoAttendedAtLeast8Classes = []; // empty array to store eligible students names
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= 8) {
        studentsWhoAttendedAtLeast8Classes.push(arr[i][0]); // pushing the first elements of the inner array in this case names
      }
    }
  }
  return studentsWhoAttendedAtLeast8Classes;
}

// 2nd method using filter and map
function eligibleStudents(arr) {
  //
  return arr.filter((item) => item[1] >= 8).map((item) => (item = item[0]));
}

/* ======= TESTS - DO NOT MODIFY ===== */

const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10],
];

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (util.isDeepStrictEqual(actual, expected)) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("eligibleStudents function works", eligibleStudents(attendances), [
  "Ahmed",
  "Clement",
  "Tayoa",
  "Nina",
]);
