function last(x) {
  return x.split(' ')
    .map((x, i) => [x, i])
    .sort((a, b) => a[0].slice(-1).localeCompare(b[0].slice(-1)) || a[1] - b[1])
    .map(x => x[0])
}