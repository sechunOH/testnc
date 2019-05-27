function main(params) {
  let name = params.name || "World";
  let place = params.place || "Naver";
  return {payload:  "Hello, " + name + " in " + place + "!"};
}
