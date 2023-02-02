// Input your timecodes into the top variables.
// run the script.

const prospect_1_recieving_time = Date.parse("2023-02-02T16:05:16.054Z");
const prospect_2_recieving_time = Date.parse("2023-02-02T16:05:17.186Z");
const name1 = Object.keys({ prospect_1_recieving_time });
const name2 = Object.keys({ prospect_2_recieving_time });
const lesser_record =
  prospect_1_recieving_time > prospect_2_recieving_time ? name2 : name1;

let difference_between_submissions =
  prospect_1_recieving_time > prospect_2_recieving_time
    ? prospect_1_recieving_time - prospect_2_recieving_time
    : prospect_2_recieving_time - prospect_1_recieving_time;

console.log(prospect_1_recieving_time);

console.log(prospect_2_recieving_time);

console.log(`the first record to hit was ${lesser_record}`);

console.log(
  `difference_between_submissions: ${difference_between_submissions} seconds`
);
