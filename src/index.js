module.exports = function solveEquation(equation) {
const arr = equation.split (' ');
const a=arr[0];
const b=arr[3]+arr[4];
const c=arr[7]+arr[8];
const d=b*b-4*a*c;
if (d>=0){
  const x1=Math.round((-b-Math.sqrt(d))/(2*a));
  const x2=Math.round((-b+Math.sqrt(d))/(2*a));
  if (x1>x2){
  return [x2,x1];}
  else {return [x1,x2];}
  }
}
