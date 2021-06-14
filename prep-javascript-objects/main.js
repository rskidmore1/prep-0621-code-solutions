const person = {
  firstName: 'Ryan ',
  lastName: 'Skidmore',
  hobby: 'Just coding'
};

const first = person.firstName;
const last = person.lastName;
// let hobb = person.hobby;

console.log(person);

console.log("The person's name is: ", first, last);

person.job = 'Professional village idiot ';

const job = person.job;

console.log("The person's current job is: ", job);

person.previousJob = 'Amateur village idiot';

const previousJob = person.previousJob;

console.log("The person's previous job is: ", previousJob);

console.log(person);
