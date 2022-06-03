class Slider {
    constructor(options) {
        this.slider = document.querySelector(options.slider);
        this.next = this.slider.querySelector(".slider__next");
        this.prev = this.slider.querySelector(".slider__prev");
        this.sliderLine = this.slider.querySelector(".slider__line");
        this.slides = this.sliderLine.children;
        this.dir = options.direction.toUpperCase() == "X" ? "X" : "Y";
        this.timeMove = options.time == undefined ? 1000 : options.time;
        this.interval = isNaN(options.interval) == true ? this.timeMove + 1000 : options.interval;
        this.width = this.slider.clientWidth;
        this.height = this.slider.clientHeight;
        this.moveSize = this.dir == "X" ? this.width : this.height;
        this.activeSlide = 0;

        this.sliderLine.style = `position: relative;
                                overflow: hidden;
                                height: ${this.height}px;`

        for (let i = 0; i < this.slides.length; i++) {
            const element = this.slides[i];
            element.style = `position: absolute;
                            width: ${this.width}px;
                            height: ${this.height}px;`;
            if (i != this.activeSlide) {
                element.style.transform = `translate${this.dir}(${this.moveSize}px)`;
            }
            if (i == this.slides.length - 1) {
                element.style.transform = `translate${this.dir}(${-this.moveSize}px)`;
            }
        }
        this.next.addEventListener("click", () => { this.move(this.next) });
        this.prev.addEventListener("click", () => { this.move(this.prev) });
        if (options.autoplay === true) {
            let interval = setInterval(() => {
                this.move(this.next)
            }, this.interval);
            this.slider.addEventListener("mouseenter", () => {
                clearInterval(interval)
            })
            this.slider.addEventListener("mouseleave", () => {
                interval = setInterval(() => {
                    this.move(this.next)
                }, this.interval);
            })
        }
        console.dir(this.next);
    }
    move(btn) {
        this.next.disabled = true;
        this.prev.disabled = true;
        setTimeout(() => {
            this.next.disabled = false;
            this.prev.disabled = false;
        }, this.timeMove);

        let btnLeftOrRight = btn == this.next ? -this.moveSize : this.moveSize;
        for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i];
            if (i != this.activeSlide) {
                slide.style.transform = `translate${this.dir}(${-btnLeftOrRight}px)`;
                slide.style.transition = "0ms";
            }
        }
        this.slides[this.activeSlide].style.transform = `translate${this.dir}(${btnLeftOrRight}px)`;
        this.slides[this.activeSlide].style.transition = this.timeMove + "ms";
        if (btn == this.next) {
            this.activeSlide++
                if (this.activeSlide == this.slides.length) {
                    this.activeSlide = 0;
                }
        } else {
            this.activeSlide--
                if (this.activeSlide == -1) {
                    this.activeSlide = this.slides.length - 1;
                }
        }
        this.slides[this.activeSlide].style.transform = `translate${this.dir}(0px)`;
        this.slides[this.activeSlide].style.transition = this.timeMove + "ms"
    }
}

const slider = new Slider({
    slider: ".slider",
    direction: "x", // по какой оси перелистывать (X или Y)
    time: 1000, // скорость перелистывания
    autoplay: true, // автоматическое листание
    interval: 6000 // время автоматического прелистывания
})



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

// function myFunction() {
//     if (x.matches) { // If media query matches
//         document.getElementById("topnav").hidden = false;
//     } else {
//         document.getElementById("topnav").hidden = true;
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 885px)")
//   myFunction() // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes 




