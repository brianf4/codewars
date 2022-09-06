function removeUrlAnchor(url){
    if (url.includes('#')){
      return url.slice(0, url.indexOf('#'))
    } else {
      return url
    }
  }