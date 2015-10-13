import { dateIsWeekend, getDate } from '../helpers'

function* assignmentDateGenerator (startDate) {
  while (true) {
    startDate.setDate(startDate.getDate() + 1)
    while (dateIsWeekend(startDate)) { startDate.setDate(startDate.getDate() + 1) }
    yield startDate
  }
}

const assignmentDate = assignmentDateGenerator(new Date('Mon Oct 01 2015 17:05:24 GMT-0700 (PDT)'))

// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())
// console.log(assignmentDate.next().value.toISOString())