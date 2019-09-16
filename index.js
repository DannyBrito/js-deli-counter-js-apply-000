function takeANumber(line){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
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