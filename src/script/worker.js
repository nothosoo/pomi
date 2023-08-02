onmessage = (e) => {
  var started = false
  if (e.data.action === 'start') {
    if (started) return
    const interval = setInterval(() => {
      postMessage({ type: 'second' })
    }, 1000)
    postMessage({ type: 'started', interval: interval })
    started = true
  } else if (e.data.action === 'stop') {
    started = false
    clearInterval(e.data.interval)
  }
}
