async function insertion() {
  //Setting Time complexities
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N^2)";
  document.getElementById("Time_Best").innerText = "Ω(N)";

  //Setting Space complexity
  document.getElementById("Space_Worst").innerText = "O(1)";

  console.log("In insertion()");
  const ele = document.querySelectorAll(".bar");
  // color
  ele[0].style.background = "cyan";
  for (let i = 1; i < ele.length; i++) {
    console.log("In ith loop");
    let j = i - 1;
    let key = ele[i].style.height;
    // color
    ele[i].style.background = "blue";

    await waitforme(delay);

    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      console.log("In while loop");
      // color
      ele[j].style.background = "blue";
      ele[j + 1].style.height = ele[j].style.height;
      j--;

      await waitforme(delay);

      // color
      for (let k = i; k >= 0; k--) {
        ele[k].style.background = "cyan";
      }
    }
    ele[j + 1].style.height = key;
    // color
    ele[i].style.background = "cyan";
  }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await insertion();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
