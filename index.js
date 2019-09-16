var lineN = 0;
function takeANumber(line){
  line.push(++lineN);
  return 'Welcome, your number is '+ line.length +' your unique # is ' + (line.length -1); 
}
function nowServing(katzDeliLine){
  if(katzDeliLine[0] === undefined) return 'There is nobody waiting to be served!';
  return `Currently serving ${katzDeliLine.shift()}.`;
}
function currentLine(line){
  if(line[0] === undefined) return 'The line is currently empty.';
  var result ='The line is currently: ';
  for(let i = 0; i < line.length; ++i){
  result +=i+1;
  result +='. ' +line[i];
  if(i === line.length-1);
  else result+= ', '
  }
  return result;
}