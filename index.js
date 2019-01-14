var katzDeliLine = [];
<<<<<<< HEAD
 function currentLine(x) {
    var line = []
    if (x.length === 0) {
      return "The line is currently empty."
  } else {
      for(var i = 0; i < x.length; i++) {
        line += (i + 1) + ". " + x[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
=======
function currentLine (line) {
  for (let i = 0; i < line.length; i++) {
      line.push( " "  + [i + 1] + ". " + line[i])
  }
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
      return "The line is currently: " + line + "."
>>>>>>> 5c69091cf6d729dbd6f8308b4e1f708cdb10bf1c
    }
}
var ticketNo = 0 
function takeANumber(katzDeliLine) {
  ticketNo = ticketNo + 1
  katzDeliLine.push(ticketNo)
  return "Welcome, you are number " + katzDeliLine.length + " in line."
}
 function nowServing(katzDeliLine) {
	if (katzDeliLine.length === 0) {
		return "There is nobody waiting to be served!"
	} else {
		var next = katzDeliLine.shift()
		return "Currently serving " + next + "."
	}
}
