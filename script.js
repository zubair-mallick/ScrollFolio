function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    ./frame00001.png
    ./frame00002.png
    ./frame00003.png
    ./frame00004.png
    ./frame00005.png
    ./frame00006.png
    ./frame00007.png
    ./frame00008.png
    ./frame00009.png
    ./frame00010.png
    ./frame00011.png
    ./frame00012.png
    ./frame00013.png
    ./frame00014.png
    ./frame00015.png
    ./frame00016.png
    ./frame00017.png
    ./frame00018.png
    ./frame00019.png
    ./frame00020.png
    ./frame00021.png
    ./frame00022.png
    ./frame00023.png
    ./frame00024.png
    ./frame00025.png
    ./frame00026.png
    ./frame00027.png
    ./frame00028.png
    ./frame00029.png
    ./frame00030.png
    ./frame00031.png
    ./frame00032.png
    ./frame00033.png
    ./frame00034.png
    ./frame00035.png
    ./frame00036.png
    ./frame00037.png
    ./frame00038.png
    ./frame00039.png
    ./frame00040.png
    ./frame00041.png
    ./frame00042.png
    ./frame00043.png
    ./frame00044.png
    ./frame00045.png
    ./frame00046.png
    ./frame00047.png
    ./frame00048.png
    ./frame00049.png
    ./frame00050.png
    ./frame00051.png
    ./frame00052.png
    ./frame00053.png
    ./frame00054.png
    ./frame00055.png
    ./frame00056.png
    ./frame00057.png
    ./frame00058.png
    ./frame00059.png
    ./frame00060.png
    ./frame00061.png
    ./frame00062.png
    ./frame00063.png
    ./frame00064.png
    ./frame00065.png
    ./frame00066.png
    ./frame00067.png
    ./frame00068.png
    ./frame00069.png
    ./frame00070.png
    ./frame00071.png
    ./frame00072.png
    ./frame00073.png
    ./frame00074.png
    ./frame00075.png
    ./frame00076.png
    ./frame00077.png
    ./frame00078.png
    ./frame00079.png
    ./frame00080.png
    ./frame00081.png
    ./frame00082.png
    ./frame00083.png
    ./frame00084.png
    ./frame00085.png
    ./frame00086.png
    ./frame00087.png
    ./frame00088.png
    ./frame00089.png
    ./frame00090.png
    ./frame00091.png
    ./frame00092.png
    ./frame00093.png
    ./frame00094.png
    ./frame00095.png
    ./frame00096.png
    ./frame00097.png
    ./frame00098.png
    ./frame00099.png
    ./frame00100.png
    ./frame00101.png
    ./frame00102.png
    ./frame00103.png
    ./frame00104.png
    ./frame00105.png
    ./frame00106.png
    ./frame00107.png
    ./frame00108.png
    ./frame00109.png
    ./frame00110.png
    ./frame00111.png
    ./frame00112.png
    ./frame00113.png
    ./frame00114.png
    ./frame00115.png
    ./frame00116.png
    ./frame00117.png
    ./frame00118.png
    ./frame00119.png
    ./frame00120.png
    ./frame00121.png
    ./frame00122.png
    ./frame00123.png
    ./frame00124.png
    ./frame00125.png
    ./frame00126.png
    ./frame00127.png
    ./frame00128.png
    ./frame00129.png
    ./frame00130.png
    ./frame00131.png
    ./frame00132.png
    ./frame00133.png
    ./frame00134.png
    ./frame00135.png
    ./frame00136.png
    ./frame00137.png
    ./frame00138.png
    ./frame00139.png
    ./frame00140.png
    ./frame00141.png
    ./frame00142.png
    ./frame00143.png
    ./frame00144.png
    ./frame00145.png
    ./frame00146.png
    ./frame00147.png
    ./frame00148.png
    ./frame00149.png
    ./frame00150.png
    ./frame00151.png
    ./frame00152.png
    ./frame00153.png
    ./frame00154.png
    ./frame00155.png
    ./frame00156.png
    ./frame00157.png
    ./frame00158.png
    ./frame00159.png
    ./frame00160.png
    ./frame00161.png
    ./frame00162.png
    ./frame00163.png
    ./frame00164.png
    ./frame00165.png
    ./frame00166.png
    ./frame00167.png
    ./frame00168.png
    ./frame00169.png
    ./frame00170.png
    ./frame00171.png
    ./frame00172.png
    ./frame00173.png
    ./frame00174.png
    ./frame00175.png
    ./frame00176.png
    ./frame00177.png
    ./frame00178.png
    ./frame00179.png
    ./frame00180.png
    ./frame00181.png
    ./frame00182.png
    ./frame00183.png
    ./frame00184.png
    ./frame00185.png
    ./frame00186.png
    ./frame00187.png
    ./frame00188.png
    ./frame00189.png
    ./frame00190.png
    ./frame00191.png
    ./frame00192.png
    ./frame00193.png
    ./frame00194.png
    ./frame00195.png
    ./frame00196.png
    ./frame00197.png
    ./frame00198.png
    ./frame00199.png
    ./frame00200.png
    ./frame00201.png
    ./frame00202.png
    ./frame00203.png
    ./frame00204.png
    ./frame00205.png
    ./frame00206.png
    ./frame00207.png
    ./frame00208.png
    ./frame00209.png
    ./frame00210.png
    ./frame00211.png
    ./frame00212.png
    ./frame00213.png
    ./frame00214.png
    ./frame00215.png
    ./frame00216.png
    ./frame00217.png
    ./frame00218.png
    ./frame00219.png
    ./frame00220.png
    ./frame00221.png
    ./frame00222.png
    ./frame00223.png
    ./frame00224.png
    ./frame00225.png
    ./frame00226.png
    ./frame00227.png
    ./frame00228.png
    ./frame00229.png
    ./frame00230.png
    ./frame00231.png
    ./frame00232.png
    ./frame00233.png
    ./frame00234.png
    ./frame00235.png
    ./frame00236.png
    ./frame00237.png
    ./frame00238.png
    ./frame00239.png
    ./frame00240.png
    ./frame00241.png
    ./frame00242.png
    ./frame00243.png
    ./frame00244.png
    ./frame00245.png
    ./frame00246.png
    ./frame00247.png
    ./frame00248.png
    ./frame00249.png
    ./frame00250.png
    ./frame00251.png
    ./frame00252.png
    ./frame00253.png
    ./frame00254.png
    ./frame00255.png
    ./frame00256.png
    ./frame00257.png
    ./frame00258.png
    ./frame00259.png
    ./frame00260.png
    ./frame00261.png
    ./frame00262.png
    ./frame00263.png
    ./frame00264.png
    ./frame00265.png
    ./frame00266.png
    ./frame00267.png
    ./frame00268.png
    ./frame00269.png
    ./frame00270.png
    ./frame00271.png
    ./frame00272.png
    ./frame00273.png
    ./frame00274.png
    ./frame00275.png
    ./frame00276.png
    ./frame00277.png
    ./frame00278.png
    ./frame00279.png
    ./frame00280.png
    ./frame00281.png
    ./frame00282.png
    ./frame00283.png
    ./frame00284.png
    ./frame00285.png
    ./frame00286.png
    ./frame00287.png
    ./frame00288.png
    ./frame00289.png
    ./frame00290.png
    ./frame00291.png
    ./frame00292.png
    ./frame00293.png
    ./frame00294.png
    ./frame00295.png
    ./frame00296.png
    ./frame00297.png
    ./frame00298.png
    ./frame00299.png
    ./frame00300.png
    ./frame00301.png
    ./frame00302.png
    ./frame00303.png
    ./frame00304.png
    ./frame00305.png
    ./frame00306.png
    ./frame00307.png
    ./frame00308.png
    ./frame00309.png
    ./frame00310.png
    ./frame00311.png
    ./frame00312.png
    ./frame00313.png
    ./frame00314.png
    ./frame00315.png
    ./frame00316.png
    ./frame00317.png
    ./frame00318.png
    ./frame00319.png
    ./frame00320.png
    ./frame00321.png
    ./frame00322.png
    ./frame00323.png
    ./frame00324.png
    ./frame00325.png
    ./frame00326.png
    ./frame00327.png
    ./frame00328.png
    ./frame00329.png
    ./frame00330.png
    ./frame00331.png
    ./frame00332.png
    ./frame00333.png
    ./frame00334.png
    ./frame00335.png
    ./frame00336.png
    ./frame00337.png
    ./frame00338.png
    ./frame00339.png
    ./frame00340.png
    ./frame00341.png
    ./frame00342.png
    ./frame00343.png
    ./frame00344.png
    ./frame00345.png
    ./frame00346.png
    ./frame00347.png
    ./frame00348.png
    ./frame00349.png
    ./frame00350.png
    ./frame00351.png
    ./frame00352.png
    ./frame00353.png
    ./frame00354.png
    ./frame00355.png
    ./frame00356.png
    ./frame00357.png
    ./frame00358.png
    ./frame00359.png
    ./frame00360.png
    ./frame00361.png
    ./frame00362.png
    ./frame00363.png
    ./frame00364.png
    ./frame00365.png
    ./frame00366.png
    ./frame00367.png
    ./frame00368.png
    ./frame00369.png
    ./frame00370.png
    ./frame00371.png
    ./frame00372.png
    ./frame00373.png
    ./frame00374.png
    ./frame00375.png
    ./frame00376.png
    ./frame00377.png
    ./frame00378.png
    ./frame00379.png
    ./frame00380.png
    ./frame00381.png
    ./frame00382.png
    ./frame00383.png
    ./frame00384.png
    ./frame00385.png
    ./frame00386.png
    ./frame00387.png
    ./frame00388.png
    ./frame00389.png
    ./frame00390.png
    ./frame00391.png
    ./frame00392.png
    ./frame00393.png
    ./frame00394.png
    ./frame00395.png
    ./frame00396.png
    ./frame00397.png
    ./frame00398.png
    ./frame00399.png
    ./frame00400.png
    ./frame00401.png
    ./frame00402.png
    ./frame00403.png
    ./frame00404.png
    ./frame00405.png
    ./frame00406.png
    ./frame00407.png
    ./frame00408.png
    ./frame00409.png
    ./frame00410.png
    ./frame00411.png
    ./frame00412.png
    ./frame00413.png
    ./frame00414.png
    ./frame00415.png
    ./frame00416.png
    ./frame00417.png
    ./frame00418.png
    ./frame00419.png
    ./frame00420.png
    ./frame00421.png
    ./frame00422.png
    ./frame00423.png
    ./frame00424.png
    ./frame00425.png
    ./frame00426.png
    ./frame00427.png
    ./frame00428.png
    ./frame00429.png
    ./frame00430.png
    ./frame00431.png
    ./frame00432.png
    ./frame00433.png
    ./frame00434.png
    ./frame00435.png
    ./frame00436.png
    ./frame00437.png
    ./frame00438.png
    ./frame00439.png
    ./frame00440.png
    ./frame00441.png
    ./frame00442.png
    ./frame00443.png
    ./frame00444.png
    ./frame00445.png
    ./frame00446.png
    ./frame00447.png
    ./frame00448.png
    ./frame00449.png
    ./frame00450.png
    ./frame00451.png
    ./frame00452.png
    ./frame00453.png
    ./frame00454.png
    ./frame00455.png
    ./frame00456.png
    ./frame00457.png
    ./frame00458.png
    ./frame00459.png
    ./frame00460.png
    ./frame00461.png
    ./frame00462.png
    ./frame00463.png
    ./frame00464.png
    ./frame00465.png
    ./frame00466.png
    ./frame00467.png
    ./frame00468.png
    ./frame00469.png
    ./frame00470.png
    ./frame00471.png
    ./frame00472.png
    ./frame00473.png
    ./frame00474.png
    ./frame00475.png
    ./frame00476.png
    ./frame00477.png
    ./frame00478.png
    ./frame00479.png
    ./frame00480.png
    ./frame00481.png
    ./frame00482.png
    ./frame00483.png
    ./frame00484.png
    ./frame00485.png
    ./frame00486.png
    ./frame00487.png
    ./frame00488.png
    ./frame00489.png
    ./frame00490.png
    ./frame00491.png
    ./frame00492.png
    ./frame00493.png
    ./frame00494.png
    ./frame00495.png
    ./frame00496.png
    ./frame00497.png
    ./frame00498.png
    ./frame00499.png
    ./frame00500.png
    ./frame00501.png
    ./frame00502.png
    ./frame00503.png
    ./frame00504.png
    ./frame00505.png
    ./frame00506.png
    ./frame00507.png
    ./frame00508.png
    ./frame00509.png
    ./frame00510.png
    ./frame00511.png
    ./frame00512.png
    ./frame00513.png
    ./frame00514.png
    ./frame00515.png
    ./frame00516.png
    ./frame00517.png
    ./frame00518.png
    ./frame00519.png
    ./frame00520.png
    ./frame00521.png
    ./frame00522.png
    ./frame00523.png
    ./frame00524.png
    ./frame00525.png
    ./frame00526.png
    ./frame00527.png
    ./frame00528.png
    ./frame00529.png
    ./frame00530.png
    ./frame00531.png
    ./frame00532.png
    ./frame00533.png
    ./frame00534.png
    ./frame00535.png
    ./frame00536.png
    ./frame00537.png
    ./frame00538.png
    ./frame00539.png
    ./frame00540.png
    ./frame00541.png
    ./frame00542.png
    ./frame00543.png
    ./frame00544.png
    ./frame00545.png
    ./frame00546.png
    ./frame00547.png
    ./frame00548.png
    ./frame00549.png
    ./frame00550.png
    ./frame00551.png
    ./frame00552.png
    ./frame00553.png

   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 553;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    const img = images[imageSeq.frame];
    const canvas = context.canvas;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.width;
    const imgHeight = img.height;

    // Calculate the scale factor for resizing the image
    const scaleFactor = Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight);

    // Define a slightly larger scale factor (e.g., 1.1 for 10% bigger)
    const largerScaleFactor = 1.8;

    // Calculate the dimensions of the image after scaling
    const scaledWidth = imgWidth * scaleFactor * largerScaleFactor;
    const scaledHeight = imgHeight * scaleFactor * largerScaleFactor;

    // Calculate the coordinates to center the larger image and move it down slightly
    const x = (canvasWidth - scaledWidth) / 2;
    const y = (canvasHeight - scaledHeight) / 2 + 0.02 * canvasHeight; // Adjust 0.02 to your desired offset (2vw in height)

    // Clear the canvas and draw the larger image at the center
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(img, x, y, scaledWidth, scaledHeight);
}

  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })