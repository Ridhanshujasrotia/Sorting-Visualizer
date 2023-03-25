async function bubble() {
  //Setting Time complexities
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N^2)";
  document.getElementById("Time_Best").innerText = "Ω(N)";

  //Setting Space complexity
  document.getElementById("Space_Worst").innerText = "O(1)";

  console.log("In bubbe()");
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    console.log("In ith loop");
    for (let j = 0; j < ele.length - i - 1; j++) {
      console.log("In jth loop");
      ele[j].style.background = "blue";
      ele[j + 1].style.background = "blue";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        console.log("In if condition");
        await waitforme(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = "green";
      ele[j + 1].style.background = "green";
    }
    ele[ele.length - 1 - i].style.background = "cyan";
  }
  ele[0].style.background = "cyan";
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await bubble();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
