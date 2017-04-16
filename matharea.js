function squareArea(A){
  var circumference = 4 * A;
  var radius = circumference / (2 * Math.PI);
  var area = Math.pow(radius, 2);
  return Math.round(area * 100) / 100;
}
