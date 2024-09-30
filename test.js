const tryCatchWrapper = (fn) => {
  try {
    fn(10, 0, 10, 23, 23);
    // console.log(fn(10, 0, 10));
  } catch (error) {
    console.log(error);
  }
};

tryCatchWrapper(function divideTwoNumber(num1, num2) {
  console.log("num1 ", num1);
  console.log("num2 ", num2);

  return num1 / num2;
});
