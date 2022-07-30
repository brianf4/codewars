const orderedCount = (text) =>{
    // Implement me!
    const arr = [...new Set([...text])]
    return arr.map(el => [el, [...text].filter(e => e === el).length]);
  }