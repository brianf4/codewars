function whoTookTheCarKey(message) {
    const msg = String.fromCharCode(
      ...message.map(bin => parseInt(bin, 2))
    )
    return msg
  }