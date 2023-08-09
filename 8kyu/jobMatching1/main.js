function match(candidate, job) {
  let wiggleRoom = candidate.minSalary / 10
  console.log(candidate, job, wiggleRoom)
  
  if (Object.keys(candidate).length === 0 || Object.keys(job).length === 0) {
    throw Error
  }
  if ((candidate.minSalary - wiggleRoom)  <= job.maxSalary) {
    return true
  } else {
    return false
  }
  
  
}