const string =
    "«Агродир» дыйкан чарбасы чычырканак,карагат,малина,шилби сыяктуу мөмө-жемиш өсүмдүктөрүнүн жогорку сорттогу көчөттөрүн өстүрөт.",
  str = string.split(""),
  el = document.getElementById("str");
var mainPageModalSlider;
function showSucces(e) {
  $(document)
    .find(".success[data-id=" + e + "]")
    .removeClass("hide"),
    setTimeout(() => {
      $(document)
        .find(".success[data-id=" + e + "]")
        .addClass("hide");
    }, 5e3);
}
!(function e() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(t);
  const t = setTimeout(e, 50);
})(),
  $(document).on("click", ".close", function () {
    $(".modal").modal("hide");
  }),
  $(document).on("mouseover", ".menu-item", function () {
    $(".menu-img").removeClass("d-none"),
      $(".menu-img").attr("src", $(this).attr("data-img"));
    let e = $(this).attr("hover_letter");
    console.log(e, "");
    let t = `\n        <span class="menuItem_border menuItem_border_letter">\n            ${e}\n        </span> \n        <span class="menuItem_border menuItem_border_letter_gold">\n            ${e}\n        </span> \n    `;
    $(".menuItem_border_wrapper").html(t),
      setTimeout(() => {
        $(".menuItem_border_letter_gold").addClass("menuItem_border_width");
      }, 100);
  }),
  $(document).ready(function () {
    $("body").addClass("is-ready"),
      $(".navbar").removeClass("delay-for-preloader"),
      setTimeout(() => {
        scroll.update(), console.log("UPDATING");
      }, 5e3);
  }),
  document.addEventListener("DOMContentLoaded", function () {
    if ($("#inner-slider").length) {
      var e = new Splide("#inner-slider", {
        type: "loop",
        drag: "free",
        gap: "2rem",
        pagination: !1,
        wheel: !1,
        autoWidth: !0,
        padding: "15rem",
        focus: "center",
        speed: 2e3,
        easing: "cubic-bezier(0.25,1,0.5,1)",
        waitForTransition: (boolean = !1),
        height: "500px",
      });
      e.mount(),
        e.go(1),
        e.on("dragging", function () {
          parseInt($(".splide__list").css("transform").split(",")[4].trim());
        }),
        e.on("dragged", function () {
          $(".splide__slide img")
            .addClass("skew-left")
            .removeClass("skew-right skew-left");
        }),
        e.on("click", function (e) {
          $("#galleryModalWelcome").modal("show"),
            setTimeout(() => {
              console.log("goo"), mainPageModalSlider.go(e.index);
            }, 200);
        }),
        e.on("move", function (e, t, a) {});
    }
    if ($("#scroll-element").length) {
      var t = new Splide("#scroll-element", {
        classes: {
          pagination: "splide__pagination",
          page: "splide__pagination__page",
        },
        type: "loop",
        drag: "free",
        pagination: !1,
        wheel: !1,
        start: 0,
        lazyLoad: "sequential",
        speed: 2e3,
        easing: "cubic-bezier(0.25,1,0.5,1)",
      });
      t.mount(),
        t.on("move", function (e, t, a) {
          $(".current-slide").html("0" + (e + 1)),
            $(".tab").removeClass("active"),
            $(".tab[data-id=" + e + "]").addClass("active");
        }),
        $(".tab").on("click", function () {
          t.go(">" + $(this).attr("data-id"));
        });
    }
  }),
  $(document).on("click", ".callback-btn[data-id=1]", function () {
    let e = $(".name[data-id=1]"),
      t = $(".phone[data-id=1]"),
      a = 0;
    "" == e.val() && ((a += 1), e.parent().addClass("error")),
      "" == t.val() && ((a += 1), t.parent().addClass("error")),
      a ||
        (showSucces(1),
        axios
          .post("/callback", { name: e.val(), phone: t.val() })
          .then(function () {
            e.val("").parent().removeClass("error"),
              t.val("").parent().removeClass("error");
          }));
  }),
  $(document).on("click", ".feedbackFinalBtn", function () {
    let e = $("#messageModal").find(".nameInput"),
      t = $("#messageModal").find(".phoneInput"),
      a = 0;
    "" == e.val() && ((a += 1), e.parent().addClass("error")),
      "" == t.val() && ((a += 1), t.parent().addClass("error")),
      a ||
        (showSucces(1),
        axios
          .post("/callback", { name: e.val(), phone: t.val() })
          .then(function () {
            e.val("").parent().removeClass("error"),
              t.val("").parent().removeClass("error"),
              setTimeout(() => {
                $("#messageModal").modal("hide");
              }, 6e3);
          }));
  });
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: !0,
  lerp: 0.05,
});
$(document).ready(function () {
  setTimeout(() => {
    scroll.update(), console.log("update 1");
  }, 1e3);
}),
  $(document).ready(function () {
    setTimeout(() => {
      scroll.update(), console.log("update 8");
    }, 8e3);
  });
var height = $(".navbar-brand").height();
let updated = 0;
scroll.on("scroll", function (e) {
  e.delta &&
    (e.delta.y >= height - 5
      ? $(".navbar").addClass("bg-white")
      : $(".navbar").removeClass("bg-white"),
    0.9 * e.limit.y <= e.delta.y &&
      updated < 2 &&
      ((updated += 1), scroll.update()));
}),
  $(window).scroll(function () {
    $(window).scrollTop() >= height - 5
      ? $(".navbar").addClass("bg-white")
      : $(".navbar").removeClass("bg-white");
  }),
  $(document).on("click", ".room", function () {
    $(".room[data-id=" + $(this).attr("data-id") + "]").removeClass("active"),
      $(this).addClass("active"),
      sortApartments();
  });
var slider = document.getElementById("slider-round");
if (slider) {
  let e = parseInt(slider.getAttribute("data-start")),
    t = parseInt(slider.getAttribute("data-end"));
  if ((console.log(e, "=====", t), e && t)) {
    noUiSlider.create(slider, {
      start: [e, t],
      connect: !0,
      range: { min: e, max: t },
    });
    var sliderValues = [
      document.getElementById("slider-start"),
      document.getElementById("slider-end"),
    ];
    slider.noUiSlider.on("update", function (e, t) {
      sliderValues[t].innerHTML = Math.round(e[t]);
    }),
      slider.noUiSlider.on("end", function (e, t) {
        sortApartments();
      });
  }
}
$("#clear-filter").on("click", function () {
  let e = document.getElementById("slider-round"),
    t = 0,
    a = 9999;
  e &&
    ((t = parseInt(e.getAttribute("data-start"))),
    (a = parseInt(e.getAttribute("data-end")))),
    $(".room").removeClass("active"),
    e.noUiSlider.set([t, a]),
    sortApartments();
});
let option = {
  perPage: 1,
  cover: !1,
  type: "loop",
  pagination: !1,
  wheel: !1,
  focus: "center",
  lazyLoad: "sequential",
  speed: 2e3,
  easing: "cubic-bezier(0.25,1,0.5,1)",
};
$("#inner-slider4").length && new Splide("#inner-slider4", option).mount(),
  $("#inner-slider5").length && new Splide("#inner-slider5", option).mount(),
  $(".apartment-modal").on("click", function () {
    let e = $(this);
    $("#room-id").val(e.attr("data-id")),
      $("#room-room").html(e.attr("data-room")),
      $("#room-floor").html(e.attr("data-floor")),
      $("#room-area").html(e.attr("data-area") + " м"),
      $("#room-block").html("блок " + e.attr("data-block")),
      $("#room-direction").attr("src", e.attr("data-direction")),
      $("#room-genplan").attr("src", e.attr("data-genplan")),
      $("#room-image").html($(".room-images").html()),
      new Splide("#inner-slider3", option).mount(),
      $("#room-imageMobile").html($(".room-images").html()),
      new Splide("#inner-slider3Mobile", option).mount();
  });
let option2 = option;
function sortApartments() {
  let e = $("#thisProjectId").attr("projectId"),
    t = $(".room.active[data-id=1].text").html(),
    a = $(".room.active[data-id=2].text").html(),
    o = parseInt($("#slider-start").html()),
    n = parseInt($("#slider-end").html());
  axios
    .post("/sort", { projectId: e, start: o, end: n, room: a, block: t })
    .then(function (e) {
      $("#apartments-container").html(e.data.view),
        $("#quantity").html(e.data.count),
        scroll.update();
    });
}
var splide5;
(option2.cover = !0),
  $(document).on("click", ".building", function () {
    $("#building-image").html(
      $("#buildingGallery" + $(this).attr("data-id")).html()
    ),
      new Splide("#inner-slider6", option2).mount();
  }),
  $(".callback-btn[data-id=2]").on("click", function () {
    let e = $("#room-floor").html(),
      t = $("#room-room").html(),
      a = $("#room-area").html(),
      o = $("#room-block").html(),
      n = $(".name[data-id=2]"),
      i = $(".phone[data-id=2]"),
      r = 0;
    "" == n.val() && ((r += 1), n.parent().addClass("error")),
      "" == i.val() && ((r += 1), i.parent().addClass("error")),
      r ||
        (showSucces(2),
        axios
          .post("/reserve", {
            name: n.val(),
            phone: i.val(),
            floor: e,
            room: t,
            area: a,
            block: o,
          })
          .then(function () {
            n.val(""), i.val("");
          }));
  }),
  $("#section1SliderBtnRight").on("click", function () {
    let e = parseInt($(".activeSlide").attr("order")),
      t = parseInt($(".projectNamesContainer").length),
      a = e + 1;
    e == t && (a = 1),
      console.log(e, a),
      $(".write-text").addClass("writeBackText"),
      $(".show-text").addClass("hideSliderText"),
      setTimeout(() => {
        $(`.slider_${e}`).addClass("inactiveSlide"),
          $(`.slider_${e}`).removeClass("activeSlide"),
          $(`.slider_${a}`).addClass("activeSlide"),
          $(`.slider_${a}`).removeClass("inactiveSlide"),
          $(".show-text").removeClass("hideSliderText"),
          $(".write-text").removeClass("writeBackText"),
          $(`.mainSlider_${e}`).removeClass("mainSliderActiveImage"),
          $(`.mainSlider_${a}`).addClass("mainSliderActiveImage");
      }, 700);
  }),
  $("#section1SliderBtnLeft").on("click", function () {
    let e = parseInt($(".activeSlide").attr("order")),
      t = parseInt($(".projectNamesContainer").length),
      a = t;
    (a = 1 == e ? t : e - 1),
      console.log(e, a),
      $(".write-text").addClass("writeBackText"),
      $(".show-text").addClass("hideSliderText"),
      setTimeout(() => {
        $(`.slider_${e}`).addClass("inactiveSlide"),
          $(`.slider_${e}`).removeClass("activeSlide"),
          $(`.slider_${a}`).addClass("activeSlide"),
          $(`.slider_${a}`).removeClass("inactiveSlide"),
          $(".show-text").removeClass("hideSliderText"),
          $(".write-text").removeClass("writeBackText"),
          $(`.mainSlider_${e}`).removeClass("mainSliderActiveImage"),
          $(`.mainSlider_${a}`).addClass("mainSliderActiveImage");
      }, 700);
  }),
  $(".splide__slide img").on("click", function () {
    $(".galleryModalWelcomeImageContainer").css(
      "background-image",
      `url(${$(this).attr("src")})`
    );
  }),
  $("#news-slider").length &&
    (splide5 = new Splide("#news-slider", {
      type: "loop",
      perPage: 2,
      easing: "cubic-bezier(0.25,1,0.5,1)",
      speed: 1e3,
      gap: "30px",
      perMove: 1,
      lazyLoad: "sequential",
      cover: !0,
      wheel: !1,
      waitForTransition: (boolean = !1),
      breakpoints: { 640: { perPage: 1 } },
    })).mount(),
  $("#project-slider_one").length &&
    (splide5 = new Splide("#project-slider_one", {
      type: "loop",
      perPage: 1,
      easing: "cubic-bezier(0.25,1,0.5,1)",
      speed: 1e3,
      lazyLoad: "sequential",
      cover: !0,
      wheel: !1,
      waitForTransition: (boolean = !1),
      breakpoints: { 640: { perPage: 1 } },
    })).mount(),
  $(".projectItemCardImage").hover(function () {
    $(this).removeClass("qwerty");
  }),
  $(document).ready(function () {
    setTimeout(() => {
      $(".projectNamesContainer p").removeClass("delay-for-preloader");
    }, 2e3),
      setTimeout(() => {
        console.log("PRRRRRRRRRE"), $(".aaaa_bbbb").css("opacity", "1");
      }, 250);
  }),
  $("#construction-slider").length &&
    (splide5 = new Splide("#construction-slider", {
      type: "loop",
      perPage: 3,
      easing: "cubic-bezier(0.25,1,0.5,1)",
      speed: 1e3,
      gap: "20px",
      perMove: 1,
      lazyLoad: "sequential",
      cover: !0,
      wheel: !1,
      waitForTransition: (boolean = !1),
      breakpoints: { 640: { perPage: 1 } },
    })).mount(),
  $("#inner-slider_2").length &&
    (mainPageModalSlider = new Splide("#inner-slider_2", {
      type: "loop",
      drag: "free",
      perPage: 1,
      snap: !0,
      autoWidth: !0,
      clones: 1,
      cloneStatus: !0,
      focus: "center",
      pagination: !1,
      wheel: !1,
      lazyLoad: "nearby",
      preloadPages: 2,
      speed: 2e3,
      waitForTransition: (boolean = !1),
    })).mount(),
  $("#partners-slider").length &&
    new Splide("#partners-slider", {
      type: "loop",
      perPage: 4,
      easing: "cubic-bezier(0.25,1,0.5,1)",
      speed: 1e3,
      gap: "20px",
      perMove: 1,
      lazyLoad: "sequential",
      cover: !0,
      wheel: !1,
      waitForTransition: (boolean = !1),
      breakpoints: {
        1200: { perPage: 4, gap: "20px" },
        900: { perPage: 3, gap: "20px" },
        700: { perPage: 2, gap: "10px" },
        640: { perPage: 2, gap: "1px" },
      },
    }).mount(),
  $("#license-slider").length &&
    new Splide("#license-slider", {
      type: "loop",
      perPage: 4,
      easing: "cubic-bezier(0.25,1,0.5,1)",
      speed: 1e3,
      gap: "20px",
      perMove: 1,
      lazyLoad: "sequential",
      cover: !0,
      wheel: !1,
      waitForTransition: (boolean = !1),
      breakpoints: {
        1200: { perPage: 4, gap: "20px" },
        900: { perPage: 3, gap: "20px" },
        700: { perPage: 2, gap: "10px" },
        640: { perPage: 2, gap: "1px" },
      },
    }).mount(),
  $("#project_item_slider").length &&
    new Splide("#project_item_slider", {
      type: "loop",
      drag: "free",
      gap: "2rem",
      pagination: !1,
      wheel: !1,
      padding: "15rem",
      fixedWidth: "90%",
      focus: "center",
      lazyLoad: "sequential",
      speed: 2e3,
      easing: "cubic-bezier(0.25,1,0.5,1)",
      waitForTransition: (boolean = !1),
      height: "500px",
    }).mount(),
  $(".callBackButton").click(function () {
    $(".socialBtn").hasClass("activeSocialIcons")
      ? ($(".socialBtn").removeClass("activeSocialIcons"),
        $(".callBackButtonWrapper").removeClass("overflow_visible"))
      : ($(".socialBtn").addClass("activeSocialIcons"),
        $(".callBackButtonWrapper").addClass("overflow_visible"));
  }),
  $(".menuItemProjects").click(function () {
    if ("/" !== location.pathname)
      (window.location.href = "/"), sessionStorage.setItem("page", "project");
    else {
      let e = document.querySelector("#projectsRowContainer");
      scroll.scrollTo(e);
    }
  }),
  $(document).ready(function () {
    if ("/" === location.pathname) {
      let e = sessionStorage.getItem("page");
      if ("project" === e) {
        let e = document.querySelector("#projectsRowContainer");
        scroll.scrollTo(e), sessionStorage.removeItem("page");
      }
      if ("news" === e) {
        let e = document.querySelector("#newsRowContainer");
        scroll.scrollTo(e), sessionStorage.removeItem("page");
      }
    }
  }),
  $(".menuItemNews").click(function () {
    if ("/" !== location.pathname)
      (window.location.href = "/"), sessionStorage.setItem("page", "news");
    else {
      let e = document.querySelector("#newsRowContainer");
      scroll.scrollTo(e);
    }
  }),
  $("#closeMainPageModalVideo").click(function () {
    document.getElementById("mainPageModalVideo").pause();
  });
