function gimme (triplet) {
  return triplet.indexOf(triplet.slice(0).sort((a,b) => a -b)[1])
}