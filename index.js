// Input your timecodes into the top variables.
// run the doc.

const prospect_1_recieving_time = Date.parse("2023-01-23T17:18:17.698Z");
const prospect_2_recieving_time = Date.parse("2023-01-23T17:18:18.702Z");

let difference_between_submissions =
  prospect_1_recieving_time > prospect_2_recieving_time
    ? prospect_1_recieving_time - prospect_2_recieving_time
    : prospect_2_recieving_time - prospect_1_recieving_time;

console.log(prospect_1_recieving_time);

console.log(prospect_2_recieving_time);

console.log(
  "difference_between_submissions: " +
    difference_between_submissions +
    " seconds"
);
